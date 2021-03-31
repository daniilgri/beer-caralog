export interface NotificationState {
  display: boolean;
  status: "succeed" | "failed" | "";
  message: string;
}
