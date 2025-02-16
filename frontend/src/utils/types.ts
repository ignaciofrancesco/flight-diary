export enum Weather {
  None = "",
  Rainy = "rainy",
  Sunny = "sunny",
  Windy = "windy",
  Cloudy = "cloudy",
  Stormy = "stormy",
}

export enum Visibility {
  None = "",
  Great = "great",
  Good = "good",
  Ok = "ok",
  Poor = "poor",
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

export type NewDiaryEntry = Omit<DiaryEntry, "id">;

export enum NotificationImportance {
  None = "",
  Success = "success",
  Error = "error",
}

export interface NotificationType {
  message: string;
  importance: NotificationImportance;
}
