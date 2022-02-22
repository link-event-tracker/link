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

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
  height: '980vh',
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
            </Typography> */}
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* {['left'].map((anchor) => ( */}
      {/* <React.Fragment key={'left'}> */}
      {/* <Button onClick={toggleDrawer('left', true)}>Menu</Button> */}
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
      {/* </React.Fragment> */}
      {/* ))} */}
    </div>
  );
};

export default MainNav;