import { IDiary, NewDiary, Visibility, Weather } from "../models/diary.model";

const isString = (string: any): boolean => {
  return typeof string === "string" || string instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather);
};

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility);
};

const parseComment = (commentFromReq: any): string => {
  if (!isString(commentFromReq)) {
    throw new Error("Incorrect or missing comment: " + commentFromReq);
  }
  return commentFromReq;
};

const parseDate = (dateFromReq: any): string => {
  if (!isDate(dateFromReq)) {
    throw new Error("Incorrect or missing date: " + dateFromReq);
  }
  return dateFromReq;
};

const parseWeather = (weatherFromReq: any): Weather => {
  if (!isString(weatherFromReq) || !isWeather(weatherFromReq)) {
    throw new Error(
      "Incorrect or missing weather: " +
        weatherFromReq +
        "\n Weather only can be: sunny, rainy, cloudy, windy, stormy"
    );
  }
  return weatherFromReq;
};

const parseVisibility = (visibilityFromReq: any): Visibility => {
  if (!isString(visibilityFromReq) || !isVisibility(visibilityFromReq)) {
    throw new Error(
      "Incorrect or missing visibility: " +
        visibilityFromReq +
        "\n Visibility only can be: great, good, bad, very bad"
    );
  }
  return visibilityFromReq;
};

const toNewDiaryEntry = (object: any): NewDiary => {
  const newEntry: NewDiary = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };
  return newEntry;
};

export default toNewDiaryEntry;
