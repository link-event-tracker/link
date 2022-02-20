import React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const MainNav = (props) => (
  <Stack spacing={1} divider={<Divider orientation="horizontal" flexItem/>}>
    <item>Logo</item>
    <item>Dashboard</item>
    <item>Save Events</item>
    <item>Billing Details</item>
    <item>My Account</item>
    <item>Settings</item>
  </Stack>
);

export default MainNav;