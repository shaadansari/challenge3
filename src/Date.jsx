import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";

function App() {
  const [fromDate, onChange] = useState(new Date());
  const [duration, setDuration] = useState("");
  const [toDate, setToDate] = useState("");

  function handleOnclick() {
    const date = new Date(Date.now() + 3600 * 1000 * (24 * duration));
    setToDate(date.toLocaleString());
  }

  function handleOnchange(e) {
    setDuration(e.target.value);
  }

  return (
    <div className="div-app">
      <h1 className="div-h">Date Tracker</h1>
      <h3 className="div-h3">From Date</h3>
      <DateTimePicker
        className="div-time"
        onChange={onChange}
        value={fromDate}
      />
      <h3 className="div-h3">Duration (in days)</h3>
      <input
        className="app-inp"
        type="number"
        placeholder="duration"
        value={duration}
        name="duration"
        onChange={handleOnchange}
      ></input>
      <button className="app-btn" onClick={handleOnclick}>
        submit
      </button>
      <h3 className="div-h3">From Date</h3>
      {toDate === "" ? (
        <input
          className="app-inp"
          type="datetime-local"
          placeholder="To Date"
          value={toDate}
        />
      ) : (
        <input
          className="app-inp"
          type="text"
          placeholder="To Date"
          value={toDate}
        />
      )}
    </div>
  );
}

export default App;
