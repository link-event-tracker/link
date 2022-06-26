import React, {useState} from 'react';
import TextField from '@mui/material/TextField';

const EventSearch = ({zip,setZip}) => {
  const[touched, setTouched] = useState(false);
  
  return (
    <div className="dateBox">
      <TextField 
        margin="normal"
        fullWidth
        id="zip" 
        label="Zip Code" 
        variant="outlined" 
        size="small"
        value={zip}
        onBlur={e=>setTouched(true)}
        onChange={e => setZip(e.target.value)}
        error={zip === '' && touched}
        helperText={zip === '' && touched ? 'Empty field!' : ' '}
      />
    </div>
  );
};

export default EventSearch;