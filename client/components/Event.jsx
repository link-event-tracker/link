import React from 'react';
import DateBox from './DateBox';

const Event = ({
  name,
  startDate,
  startTime,
  venue,
  city,
  state,
  price,
  url
}) => (
  <div className="eventBox">
    <div className="leftColumn">
      <div>{name}</div>
      <div>{startDate} at {startTime}</div>
      <div>{venue} · {city}, {state}</div>
      <div className="flex">
        <div>SAVE</div>
        <div>SHARE</div>
      </div>
    </div>
    <div className="rightColumn">
      <DateBox date={startDate} />
      <div>{price}</div>
    </div>
  </div>
);

export default Event;