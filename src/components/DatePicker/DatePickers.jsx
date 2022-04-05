import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickers = ({title}) => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      className="border-x-0 border-t-0 outline-none border-b-2 border-[#ec3323] focus:ring-0"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      minDate={new Date()}
      showDisabledMonthNavigation
      placeholderText={title}
    />
  );
};
export default DatePickers;
