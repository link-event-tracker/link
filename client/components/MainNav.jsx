import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Logo from './Linklogo.png';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
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
  backgroundColor: '#70afb3',
  height: '25px',
  width: '25px',
  borderRadius: '50%',
  marginRight: 10
}));

const MainNav = (props) => {
  const [state, setState] = useState({
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
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
};

export default MainNav;