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

const EventListContainer = () => (
  <Stack spacing={1}>
    {/* {props.marketList.map((market, idx) => eventMaker(market, idx, props))} */}
  </Stack>
);

export default EventListContainer;