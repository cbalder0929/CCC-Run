export interface EmailSubscribeInput {
  email: string;
}

export interface EmailSubscribeResult {
  ok: boolean;
  error?: string;
}

export interface EmailProvider {
  subscribe(input: EmailSubscribeInput): Promise<EmailSubscribeResult>;
}
