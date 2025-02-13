import { SyntheticEvent, useState } from "react";
import { NewDiaryEntry, Visibility, Weather } from "../utils/types";

interface DiaryEntryFormProps {
  addDiaryEntry: (newDiaryEntry: NewDiaryEntry) => void;
}

const DiaryEntryForm = (props: DiaryEntryFormProps) => {
  /* PROPS */
  const { addDiaryEntry } = props;

  /* STATE */
  const [date, setDate] = useState("");
  const [visibility, setVisibility] = useState<Visibility>(Visibility.None);
  const [weather, setWeather] = useState<Weather>(Weather.None);
  const [comment, setComment] = useState("");

  /* HANDLERS */
  const handleSubmitDiaryEntryForm = (event: SyntheticEvent) => {
    event.preventDefault();

    const newDiaryEntry: NewDiaryEntry = {
      date,
      visibility,
      weather,
      comment,
    };

    addDiaryEntry(newDiaryEntry);

    // Only clear form if it succeded
    addDiaryEntry(newDiaryEntry);
    setDate("");
    setVisibility(Visibility.None);
    setWeather(Weather.None);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmitDiaryEntryForm}>
        <div>
          <label>Date: </label>
          <input
            type="text"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Visibility: </label>
          <input
            type="text"
            value={visibility}
            onChange={(e) => {
              setVisibility(e.target.value as Visibility);
            }}
          />
        </div>
        <div>
          <label>Weather: </label>
          <input
            type="text"
            value={weather}
            onChange={(e) => setWeather(e.target.value as Weather)}
          />
        </div>
        <div>
          <label>Comment: </label>
          <input
            type="text"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default DiaryEntryForm;
