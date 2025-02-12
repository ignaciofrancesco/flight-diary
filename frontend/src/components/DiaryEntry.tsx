import { DiaryEntry as DiaryEntryType } from "../utils/types";

type DiaryEntryProps = {
  diaryEntry: DiaryEntryType;
};

const DiaryEntry = (props: DiaryEntryProps) => {
  //
  const { diaryEntry } = props;

  return (
    <li>
      <h3>{diaryEntry.date}</h3>
      <p>visibility: {diaryEntry.visibility}</p>
      <p>weather: {diaryEntry.weather}</p>
      <p>comment: "{diaryEntry.comment}"</p>
    </li>
  );
};

export default DiaryEntry;
