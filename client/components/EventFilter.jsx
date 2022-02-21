import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ConnectWithoutContactRoundedIcon from 
  '@mui/icons-material/ConnectWithoutContactRounded';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import TheatersIcon from '@mui/icons-material/Theaters';
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp';
// import SvgIcon from '@mui/material/SvgIcon';
import { yellow } from '@mui/material/colors';

const Circle = styled(Box)(() => ({
  backgroundColor: '#ffffff',
  height: '25px',
  width: '25px',
  borderRadius: '50%',
  marginRight: 15,
  marginTop: 20,
  marginLeft: 14,
  display: 'flex',
  alignItems: 'center',
}));

const EventFilter = ({func1, func2,func3,func4,func5}) => {
  return(<div className="eventNav">
    <Stack direction="row" >
      <Circle onClick={() => { console.log('onClick'); }}>
        <SportsBarIcon sx={{ color: yellow[600], 
          fontSize: 23 }}/>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
        <ConnectWithoutContactRoundedIcon sx={{ color: yellow[600], 
          fontSize: 22}}/>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
        <MenuBookSharpIcon sx={{ color: yellow[600]}}/>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
        <MusicNoteSharpIcon sx={{ color: yellow[600], 
          fontSize: 23 }}/>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
        <TheatersIcon sx={{ color: yellow[600], 
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