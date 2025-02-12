import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import DiaryEntry from "./components/DiaryEntry";
import DiaryEntryForm from "./components/DiaryEntryForm";
import { getDiaryEntries } from "./services/diaryEntriesService";
import { DiaryEntry as DiaryEntryType } from "./utils/types";

const App = () => {
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntryType[]>([]);

  useEffect(() => {
    try {
      getDiaryEntries().then((diaryEntries) => setDiaryEntries(diaryEntries));
    } catch (error: unknown) {
      if (error instanceof AxiosError) console.log("error:", error.message);
    }
  }, []);

  return (
    <div>
      <h1>Diary App</h1>
      <h2>Add new entry</h2>
      <DiaryEntryForm />
      <h2>Diary entries</h2>
      <ul>
        {diaryEntries.map((diaryEntry) => (
          <DiaryEntry key={diaryEntry.id} diaryEntry={diaryEntry} />
        ))}
      </ul>
    </div>
  );
};

export default App;
