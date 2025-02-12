import axios from "axios";
import { DiaryEntry } from "../utils/types";

const baseUrl = "/api/diaries";

export const getDiaryEntries = async () => {
  const res = await axios.get<DiaryEntry[]>(baseUrl);
  const diaryEntries = res.data;
  return diaryEntries;
};
