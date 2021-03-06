import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DateBox = ({
  startDate
}) => {
  const jsDate = new Date(startDate);

  return (
    <Box sx={{
      backgroundColor: '#8fb5b8',
      justifyContent: 'center',
      borderRadius: '15%',
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