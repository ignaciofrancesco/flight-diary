import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import DiaryEntry from "./components/DiaryEntry";
import DiaryEntryForm from "./components/DiaryEntryForm";
import Notification from "./components/Notification";
import {
  createDiaryEntry,
  getDiaryEntries,
} from "./services/diaryEntriesService";
import {
  DiaryEntry as DiaryEntryType,
  NewDiaryEntry,
  NotificationImportance,
  NotificationType,
} from "./utils/types";

const App = () => {
  /* STATE */
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntryType[]>([]);
  const [notification, setNotification] = useState<NotificationType>({
    message: "",
    importance: NotificationImportance.None,
  });

  /* EFFECTS */
  useEffect(() => {
    const fetchDiaryEntries = async () => {
      try {
        const diaryEntries = await getDiaryEntries();
        setDiaryEntries(diaryEntries);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Error fetching diary entries:", error.message);
        } else {
          console.error("Unexpected error:", error);
        }
      }
    };

    fetchDiaryEntries();
  }, []);

  /* HANDLERS */
  const addDiaryEntry = async (newDiaryEntry: NewDiaryEntry) => {
    try {
      const diaryEntry = await createDiaryEntry(newDiaryEntry);

      setDiaryEntries([...diaryEntries, diaryEntry]);

      setNotification({
        message: "A diary entry was added.",
        importance: NotificationImportance.Success,
      });

      setTimeout(() => {
        setNotification({
          message: "",
          importance: NotificationImportance.None,
        });
      }, 5000);
    } catch (error: unknown) {
      let errorMessage = "Error: ";

      if (axios.isAxiosError(error)) {
        errorMessage += error.response?.data;
      }

      setNotification({
        message: errorMessage,
        importance: NotificationImportance.Error,
      });

      setTimeout(() => {
        setNotification({
          message: "",
          importance: NotificationImportance.None,
        });
      }, 5000);
    }
  };

  return (
    <div>
      <h1>Diary App</h1>
      <h2>Add new entry</h2>
      <Notification notification={notification} />
      <DiaryEntryForm addDiaryEntry={addDiaryEntry} />
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
