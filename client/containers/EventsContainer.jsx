import React from 'react';
import EventFilter from '../components/EventFilter';
import EventSearch from '../components/EventSearch';
import EventListContainer from './EventListContainer';
import Stack from '@mui/material/Stack';

const EventsContainer = (props) => (
  <Stack spacing={1}>
    <item ><EventFilter { ...props } /></item>
    <item><EventSearch { ...props } /></item>
    <item><EventListContainer { ...props } /></item>
    {!props.eventList.length &&
      <div>No events found</div>
    }
  </Stack>
);

export default EventsContainer;