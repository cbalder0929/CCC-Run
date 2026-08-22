import { SMSProvider, SMSSubscribeInput, SMSSubscribeResult } from "./types";

// Loose but permissive phone validation: 10-15 digits, optional +, spaces, dashes.
const PHONE_PATTERN = /^\+?[\d\s().-]{10,15}$/;

export function isValidPhone(phone: string): boolean {
  return PHONE_PATTERN.test(phone.trim());
}

/**
 * In-memory subscriber store used for local development and demos.
 * No text messages are ever sent by this implementation.
 *
 * TODO(sms-provider): Replace this class with a real integration before
 * launch — e.g. Twilio. Implement the same `SMSProvider` interface so
 * `app/api/sms/route.ts` doesn't change:
 *   - Verify the number (Twilio Lookup) before storing it.
 *   - Store `process.env.TWILIO_ACCOUNT_SID` / `TWILIO_AUTH_TOKEN` /
 *     `TWILIO_FROM_NUMBER` as environment variables, never hard-coded.
 *   - Send an opt-in confirmation text (required by carrier compliance)
 *     before any reminder messages go out.
 */
class InMemorySMSProvider implements SMSProvider {
  private subscribers = new Set<string>();

  async subscribe(input: SMSSubscribeInput): Promise<SMSSubscribeResult> {
    const phone = input.phone.trim();
    if (!isValidPhone(phone)) {
      return { ok: false, error: "Enter a valid phone number." };
    }
    this.subscribers.add(phone);
    return { ok: true };
  }
}

export const smsProvider: SMSProvider = new InMemorySMSProvider();
