import React from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: 'inherit',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: 'black',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold'
}));

const StyledStack = styled(Stack)(() => ({
  backgroundColor: 'white',
  height: '100vh',
  padding: '10px',
  marginLeft: '-24px' 
}));

const Circle = styled(Box)(() => ({
  backgroundColor: 'blue',
  height: '25px',
  width: '25px',
  borderRadius: '50%',
  marginRight: 10
}));

// const Logo = styled(Box)(() => ({
//   backgroundColor: 'blue',
//   height: '25px',
//   width: '25px',
//   borderRadius: '50%',
//   marginRight: 10
// }));

const MainNav = (props) => (
  
  <StyledStack>
    <Item>
      <img src= {require('./Linklogo.png')} />
    </Item>
    <Item>
      <Circle/>
      Dashboard
    </Item>
    <Item>
      <Circle/>
      Save Events
    </Item>
    <Item>
      <Circle/>
      Billing Details
    </Item>
    <Item>
      <Circle/>
      My Account
    </Item>
    <Item>
      <Circle/>
      Settings
    </Item>
  </StyledStack>
);

export default MainNav;