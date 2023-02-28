export enum Weather {
  Sunny = "sunny",
  Rainy = "rainy",
  Cloudy = "cloudy",
  Windy = "windy",
  Stormy = "stormy",
}

export enum Visibility {
  Great = "great",
  Good = "good",
  Bad = "bad",
  VeryBad = "very bad",
}

export interface IDiary {
  id: number;
  date: string;
  weather: Weather;
  comment: string;
  visibility: Visibility;
}

export type NonSensitiveInfoDiary = Omit<IDiary, "comment">;

export type NewDiary = Omit<IDiary, "id">;
