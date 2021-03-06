import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import TheatersIcon from '@mui/icons-material/Theaters';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const Circle = styled(Box)(() => ({
  height: '30px',
  width: '30px',
  borderRadius: '50%',
  marginRight: 11.3,
  marginTop: 10,
  marginLeft: 13,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const Button = styled(ToggleButton)(() => ({
  backgroundColor: 'rgba(4,31,43,0.74)',
  marginRight: 11.3,
  marginTop: 10,
  marginLeft: 9,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const EventFilter = ({filters, handleFilters}) => {
  return(<div className="eventNav">
    <Stack marginTop='10px' display='flex'>
      <ToggleButtonGroup
        value={filters}
        onChange={handleFilters}
        aria-label="search filters"
        size="small"
      >
        <Button value="Music" aria-label="Music">
          <Circle>
            <MusicNoteSharpIcon sx={{ color: '#E8E8E8', 
              fontSize: 35 }}/>
          </Circle>
        </Button>
        <Button value="Sports" aria-label="Sports">
          <Circle>
            <SportsFootballIcon sx={{ color: '#E8E8E8', 
              fontSize: 35}}/>
          </Circle>
        </Button>
        <Button value="Arts & Theatre" aria-label="Arts & Theatre">
          <Circle>
            <TheaterComedyIcon sx={{ color: '#E8E8E8', fontSize: 35}}/>
          </Circle>
        </Button>
        <Button value="Family" aria-label="Family">
          <Circle>
            <FamilyRestroomIcon sx={{ color: '#E8E8E8', 
              fontSize: 35 }}/>
          </Circle>
        </Button>
        <Button value="Film" aria-label="Film">
          <Circle>
            <TheatersIcon sx={{ color: '#E8E8E8', 
              fontSize: 35}}/>
          </Circle>
        </Button> 
      </ToggleButtonGroup>
    </Stack>
  </div>
  );
};

export default EventFilter;