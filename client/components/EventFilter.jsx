import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const Circle = styled(Box)(() => ({
  backgroundColor: 'blue',
  height: '25px',
  width: '25px',
  borderRadius: '50%',
  marginRight: 10,
  marginTop: 13
}));

const EventFilter = ({func1, func2,func3,func4,func5}) => {
  return(<div className="eventNav">
    <Stack direction="row">
      <Circle onClick={() => { console.log('onClick'); }}>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
      </Circle>
      <Circle onClick={() => { console.log('onClick'); }}>
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