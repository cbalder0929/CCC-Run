export interface SMSSubscribeInput {
  phone: string;
}

export interface SMSSubscribeResult {
  ok: boolean;
  error?: string;
}

export interface SMSProvider {
  subscribe(input: SMSSubscribeInput): Promise<SMSSubscribeResult>;
}
