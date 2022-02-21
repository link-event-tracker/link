import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

const EventSearch = ({zip,setZip}) => {
  //set touched state to false
  const[touched, setTouched] = useState(false);
  console.log(touched);
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
        //onBlur when textField is clicked setTouched changes state to true
        onBlur={e=>setTouched(true)}
        onChange={e => setZip(e.target.value)}
        error={zip === '' && touched}
        //helperText if zip is empty string and touched is true will have helperText to show 'Empty field'
        helperText={zip === '' && touched ? 'Empty field!' : ' '}
      />
    </div>
  );
};

export default EventSearch;

