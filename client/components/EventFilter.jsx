import React from 'react';

const EventFilter = ({
  func1,
  func2,
  func3,
  func4,
  func5
}) => (
  <div className="eventNav">
    <div>{func1}</div>
    <div>{func2}</div>
    <div>{func3}</div>
    <div>{func4}</div>
    <div>{func5}</div>
  </div>
);

export default EventFilter;