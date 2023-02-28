import { IDiary, NewDiary, NonSensitiveInfoDiary } from "../models/diary.model";
import diaryData from "./diares.json";

export const getEntries = (): Array<IDiary> => {
  return diaryData as Array<IDiary>;
};

export const getNonSensitiveEntries = (): Array<NonSensitiveInfoDiary> => {
  return diaryData.map(
    ({ id, date, weather, visibility }) =>
      ({
        id,
        date,
        weather,
        visibility,
      } as NonSensitiveInfoDiary)
  );
};

export const findById = (id: number): IDiary => {
  const entry = diaryData.find((diary) => diary.id === id);
  return entry as IDiary;
};

export const addDiary = (newDiary: NewDiary): IDiary => {
  const newDiaryEntry = {
    ...newDiary,
    id: Math.max(...diaryData.map((d) => d.id)) + 1,
  };
  diaryData.push(newDiaryEntry);
  return newDiaryEntry;
};

export const deleteDiary = (id: number): void => {
  const index = diaryData.findIndex((diary) => diary.id === id);
  diaryData.splice(index, 1);
};
