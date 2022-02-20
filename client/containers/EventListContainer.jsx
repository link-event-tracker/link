import React from 'react';
import Event from '../components/Event';
import Stack from '@mui/material/Stack';

const eventMaker = (event, idx, props) => (
  <item>
    <Event
      {...event}
      key={idx}
    />
  </item>
);

const EventListContainer = ({ eventList }) => (
  <Stack spacing={1}>
    {eventList.map((event, idx) => eventMaker(event, idx))}
  </Stack>
);

export default EventListContainer;