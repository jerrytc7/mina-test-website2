import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./SchoolSchedule.css";

const calendarInfo = {
  2022: {
    4: {
      1: "TW",
      4: "H",
      5: "H",
      6: "H",
      7: "H",
      8: "H"
    },
    5: {
      2: "O"
    }
  }
};

function SchoolSchedule() {
  return (
    <Calendar
      tileContent={({ date }) => {
        console.log(date.getMonth());
        let contents = "";
        if (
          calendarInfo[date.getFullYear()] &&
          calendarInfo[date.getFullYear()][date.getMonth() + 1] &&
          calendarInfo[date.getFullYear()][date.getMonth() + 1][date.getDate()]
        ) {
          contents =
            calendarInfo[date.getFullYear()][date.getMonth() + 1][
              date.getDate()
            ];
        }
        return <div>{contents}</div>;
      }}
      tileClassName={({ date }) => {
        console.log(date.getMonth());
        let contents = "";
        if (
          calendarInfo[date.getFullYear()] &&
          calendarInfo[date.getFullYear()][date.getMonth() + 1] &&
          calendarInfo[date.getFullYear()][date.getMonth() + 1][date.getDate()]
        ) {
          contents =
            calendarInfo[date.getFullYear()][date.getMonth() + 1][
              date.getDate()
            ];
        }
        return "tile-" + contents;
      }}
    />
  );
}


export default SchoolSchedule