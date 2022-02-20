import React from 'react';

const DateBox = ({
  startDate
}) => {
  const jsDate = new Date(startDate);
  console.log(startDate, jsDate);

  return (
    <div className="dateBox">
      <div>{jsDate.toLocaleString('default', { month: 'long' })}</div>
      <div>{jsDate.getDate()}</div>
    </div>
  );
};

export default DateBox;