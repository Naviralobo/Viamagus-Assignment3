// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Datetime from "react-datetime";

function App() {
  const [startDate, setStartDate] = useState(null);
  const [duration, setDuration] = useState(0);
  const [resultDate, setResultDate] = useState(startDate);
  const dateChangeHandler = (value) => {
    setStartDate(value);
  };
  const resultDateHandler = (e) => {
    setDuration(e.target.value);
    console.log(startDate);
    console.log(duration);
    let newDate = new Date(startDate);
    let d = newDate.setDate(newDate.getDate() + duration);
    setResultDate(new Date(d));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h6>From Date</h6>
        <DatePicker
          selected={startDate}
          onChange={dateChangeHandler}
          dateFormat="MM/dd/yyyy"
        />
      </div>
      <div>
        <h6>Duration(days)</h6>
        <input type="number" value={duration} onChange={resultDateHandler} />
      </div>
      <div>
        <h6>To Date</h6>
        <DatePicker selected={resultDate} dateFormat="dd MMM yyyy" />
      </div>
    </div>
  );
}

export default App;
