import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const DateBox = ({
  startDate
}) => {
  const jsDate = new Date(startDate);
  console.log(startDate, jsDate);

  return (
    <Paper style={{backgroundColor: 'secondary'}}>
      <Stack spacing={2}>
        <div>{jsDate.toLocaleString('default', { month: 'short' }).toUpperCase()}</div>
        <div>{jsDate.getDate()}</div>
      </Stack>
    </Paper>
  );
};

export default DateBox;