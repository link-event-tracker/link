import React from 'react';

const DateBox = ({
  month,
  dayDate
}) => (
  <div className="dateBox">
    <div>{month}</div>
    <div>{dayDate}</div>
  </div>
);

export default DateBox;