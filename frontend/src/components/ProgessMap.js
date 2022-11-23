import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import ReactTooltip from "react-tooltip";
import "./ProgressMap.css";

// import "react-calendar-heatmap/dist/styles.css";
// import "./styles.css";

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ProgressMap() {
  const today = new Date();
  const randomValues = getRange(400).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(0, 3)
    };
  });

  // const randomVal = [
  //   { date: shiftDate(today, -3), count: 100 },
  //   { date: shiftDate(today, -2), count: 250 },
  //   { date: shiftDate(today, -1), count: 350 },
  //   { date: shiftDate(today, 0), count: 200 }
  // ]
  return (
    <div>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={randomValues}
        className = "map"
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${value.date.toISOString().slice(0, 10)} has count: ${
              value.count
            }`
          };
        }}
        showWeekdayLabels={true}
        // weekdayLabels = {["Mon, Tue, Wed, Thu, Fri, Sat, Sun"]}
      />
      <ReactTooltip />
    </div>
  );
}

export default ProgressMap;
