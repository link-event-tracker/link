import React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const EventSearch = ({zip,setZip}) => (

  <div className="dateBox">
    <TextField 
      margin="normal"
      id="zip" 
      label="Zip Code" 
      variant="outlined" 
      size="small"
      // type="number"
      value={zip}
      onChange={e => setZip(e.target.value)}
      error={zip === ''}
      helperText={zip === '' ? 'Empty field!' : ' '}
    />
  </div>
);

export default EventSearch;

