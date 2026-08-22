export interface RunEvent {
  id: string;
  title: string;
  /** ISO date string for the next occurrence, e.g. "2026-08-26" */
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  meetingPoint: string;
  destination: string;
  distance: string;
  durationMinutes: number;
  description: string;
  recurrence: "WEEKLY" | "ONE_TIME";
  active: boolean;
}

export interface Subscriber {
  id: string;
  email?: string;
  phone?: string;
  emailOptIn: boolean;
  smsOptIn: boolean;
  createdAt: string;
}

export interface NotificationPreference {
  reminderMinutesBefore: number;
  channel: "email" | "sms" | "calendar";
}
