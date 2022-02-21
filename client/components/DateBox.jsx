import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DateBox = ({
  startDate
}) => {
  const jsDate = new Date(startDate);
  console.log(startDate, jsDate);

  return (
    <Box sx={{
      backgroundColor: 'secondary.main',
      justifyContent: 'center'
    }}>
      <Stack spacing={0}>
        <Typography align='center' variant="h5">
          {jsDate.toLocaleString('default', { month: 'short' }).toUpperCase()}
        </Typography>
        <Typography align='center' variant="h5">{jsDate.getDate()}</Typography>
      </Stack>
    </Box>
  );
};

export default DateBox;