import axios from "axios";
import { DiaryEntry, NewDiaryEntry } from "../utils/types";

const baseUrl = "/api/diaries";

export const getDiaryEntries = async () => {
  const res = await axios.get<DiaryEntry[]>(baseUrl);
  const diaryEntries = res.data;
  return diaryEntries;
};

export const createDiaryEntry = async (newDiaryEntry: NewDiaryEntry) => {
  const res = await axios.post<DiaryEntry>(baseUrl, newDiaryEntry);
  const diaryEntry: DiaryEntry = res.data;
  return diaryEntry;
};
