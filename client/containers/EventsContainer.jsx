import React from 'react';
import EventFilter from '../components/EventFilter';
import EventSearch from '../components/EventSearch';
import EventListContainer from './EventListContainer';

const EventsContainer = (props) => (
  <div className="innerBox">
    <EventFilter {...props} />
    <EventSearch {...props} />
    <EventListContainer {...props} />
  </div>
);

export default EventsContainer;