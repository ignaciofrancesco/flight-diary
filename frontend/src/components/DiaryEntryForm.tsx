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
  const [visibility, setVisibility] = useState<Visibility>(Visibility.Great);
  const [weather, setWeather] = useState<Weather>(Weather.Rainy);
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
    setDate("");
    setVisibility(Visibility.Great);
    setWeather(Weather.Rainy);
    setComment("");
  };

  return (
    <div>
      <form onSubmit={handleSubmitDiaryEntryForm}>
        <div>
          <label>Date: </label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        <fieldset>
          <legend>Visibility</legend>
          {Object.values(Visibility).map((v) => {
            return (
              <div key={v}>
                <input
                  type="radio"
                  id={v}
                  name="visibility"
                  onChange={() => {
                    setVisibility(v);
                  }}
                  checked={v === visibility}
                />
                <label htmlFor={v}>{v}</label>
              </div>
            );
          })}
        </fieldset>
        <fieldset>
          <legend>Weather</legend>
          {Object.values(Weather).map((w) => {
            return (
              <div key={w}>
                <input
                  type="radio"
                  id={w}
                  name="weather"
                  onChange={() => {
                    setWeather(w);
                  }}
                  checked={w === weather}
                />
                <label htmlFor={w}>{w}</label>
              </div>
            );
          })}
        </fieldset>
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
