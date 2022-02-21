import React from 'react';
import DateBox from './DateBox';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
  <Paper>
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body2">{startDate} at {startTime}</Typography>
        <Typography variant="body2">{venue} · {city}, {state}</Typography>
      </Grid>
      <Grid item xs={3}>
        <DateBox startDate={startDate} />
      </Grid>
    </Grid>
    <Grid container justifyContent="space-between">
      <Grid item xs={6}>
        <Button variant='text'>SAVE</Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant='text'>SHARE</Button>
      </Grid>
    </Grid>
  </Paper>
    
);

export default Event;