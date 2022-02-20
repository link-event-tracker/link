import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


import Button from '@mui/material/Button';
import MainNav from '../components/MainNav';
import EventsContainer from './EventsContainer';
import MapDisplay from '../components/MapDisplay';

const MainContainer = () => {
  const [zip, setZip] = useState('');

  console.log(zip);

  if (zip.length === 5) {
    console.log('fetching');
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <MainNav />
        </Grid>
        <Grid item xs={2}>
          <EventsContainer zip={zip} setZip={setZip} />
        </Grid>
        <Grid item xs={8}>
          <MapDisplay />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContainer;