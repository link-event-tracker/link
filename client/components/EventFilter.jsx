import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import TheatersIcon from '@mui/icons-material/Theaters';
// import SvgIcon from '@mui/material/SvgIcon';
import { yellow } from '@mui/material/colors';

const Circle = styled(Box)(() => ({
  backgroundColor: 'rgba(4,31,43,0.74)',
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  marginRight: 15,
  marginTop: 20,
  marginLeft: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const EventFilter = ({func1, func2,func3,func4,func5}) => {
  return(<div className="eventNav">
    <Stack direction="row">
      <Circle onClick={() => { console.log('onClick'); }}>
        <MusicNoteSharpIcon sx={{ color: '#ffffff', 
          fontSize: 23 }}/>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
        <SportsFootballIcon sx={{ color: '#ffffff', 
          fontSize: 22}}/>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
        <TheaterComedyIcon sx={{ color: '#ffffff', fontSize: 20}}/>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
        <FamilyRestroomIcon sx={{ color: '#ffffff', 
          fontSize: 23 }}/>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
        <TheatersIcon sx={{ color: '#ffffff', 
          fontSize: 23}}/>
      </Circle>
    </Stack>
  </div>
  );
};

export default EventFilter;
{/* <div className="eventNav">
<div>{func1}</div>
<div>{func2}</div>
<div>{func3}</div>
<div>{func4}</div>
<div>{func5}</div>
</div> */}