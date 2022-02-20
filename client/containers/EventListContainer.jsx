import React from 'react';
import Event from '../components/Event';

const eventMaker = (event, idx, props) => (
  <Event
    {...event}
    key={idx}
  />
);

const EventListContainer = () => (
  <div className="displayBox">
    <div className="allEvents">
      {/* {props.marketList.map((market, idx) => eventMaker(market, idx, props))} */}
    </div>
  </div>
);

export default EventListContainer;