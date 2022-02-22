import React, { useState, useEffect}from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Logo from './Linklogo.png';
import Drawer from '@mui/material/Drawer';

import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: 'inherit',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  paddingBottom: '20px',
}));

const StyledStack = styled(Stack)(() => ({
  backgroundColor: 'white',
  height: '100vh',
  padding: '10px',
  marginLeft: '-24px' 
}));

const Circle = styled(Box)(() => ({
  backgroundColor: '#c9f0ee',
  height: '25px',
  width: '25px',
  borderRadius: '50%',
  marginRight: 10
}));

const MainNav = (props) => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && 
    (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Box
          style={{
            backgroundImage: `url(${Logo})`,
            backgroundSize: 'cover',
            height: '5vh',
            paddingBottom: '100px',
          }}
        />
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

      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MainNav;