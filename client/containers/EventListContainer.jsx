import React from 'react';
import Event from '../components/Event';
import Stack from '@mui/material/Stack';


const eventMaker = (event, idx, props) => (
  <Event
    {...event}
    key={idx}
  />
);

const EventListContainer = ({ eventList }) => (
  <Stack sx={{maxHeight: '68vh', overflow: 'auto'}} spacing={1}>
    {eventList.map((event, idx) => eventMaker(event, idx))}
  </Stack>
);

export default EventListContainer;