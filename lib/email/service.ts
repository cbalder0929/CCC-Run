import { EmailProvider, EmailSubscribeInput, EmailSubscribeResult } from "./types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_PATTERN.test(email.trim());
}

/**
 * In-memory subscriber store used for local development and demos.
 *
 * TODO(email-provider): Replace this class with a real integration before
 * launch — e.g. Resend, Mailchimp, or SendGrid. Implement the same
 * `EmailProvider` interface so `app/api/subscribe/route.ts` doesn't change:
 *   - Add the subscriber to the provider's audience/list via their API.
 *   - Store `process.env.EMAIL_PROVIDER_API_KEY` (never commit real keys).
 *   - Consider persisting subscribers in Supabase/Postgres as the source of
 *     truth, and syncing to the email provider from there.
 */
class InMemoryEmailProvider implements EmailProvider {
  private subscribers = new Set<string>();

  async subscribe(input: EmailSubscribeInput): Promise<EmailSubscribeResult> {
    const email = input.email.trim().toLowerCase();
    if (!isValidEmail(email)) {
      return { ok: false, error: "Enter a valid email address." };
    }
    this.subscribers.add(email);
    return { ok: true };
  }
}

export const emailProvider: EmailProvider = new InMemoryEmailProvider();
