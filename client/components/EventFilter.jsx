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

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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

const EventFilter = ({filters, handleFilters}) => {
  
 
  return(<div className="eventNav">
    <Stack marginTop='20px' display='flex'>
      <ToggleButtonGroup
        value={filters}
        onChange={handleFilters}
        aria-label="search filters"
      >
        <ToggleButton value="Music" aria-label="Music">
          <Circle onClick={() => { console.log('music'); }}>
            <MusicNoteSharpIcon sx={{ color: '#ffffff', 
              fontSize: 23, margin: 'auto'}}/>
          </Circle>
        </ToggleButton>
        <ToggleButton value="Sports" aria-label="Sports">
          <Circle onClick={() => { console.log('sports'); }}>
            <SportsFootballIcon sx={{ color: '#ffffff', 
              fontSize: 22}}/>
          </Circle>
        </ToggleButton>
        <ToggleButton value="Arts & Theatre" aria-label="Arts & Theatre">
          <Circle onClick={() => { console.log('arts & theatre'); }}>
            <TheaterComedyIcon sx={{ color: '#ffffff', fontSize: 20}}/>
          </Circle>
        </ToggleButton>
        <ToggleButton value="Family" aria-label="Family">
          <Circle onClick={() => { console.log('family'); }}>
            <FamilyRestroomIcon sx={{ color: '#ffffff', 
              fontSize: 23 }}/>
          </Circle>
        </ToggleButton>
        <ToggleButton value="Film" aria-label="Film">
          <Circle onClick={() => { console.log('film'); }}>
            <TheatersIcon sx={{ color: '#ffffff', 
              fontSize: 23}}/>
          </Circle>
        </ToggleButton> 
      </ToggleButtonGroup>
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