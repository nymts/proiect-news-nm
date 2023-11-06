import React from "react";

function DateFormat({ date }) {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");

  return <span>{formattedDate}</span>;
}

export default DateFormat;
