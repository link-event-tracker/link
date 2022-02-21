import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


import Button from '@mui/material/Button';
import MainNav from '../components/MainNav';
import EventsContainer from './EventsContainer';
import MapDisplay from '../components/MapDisplay';

const MainContainer = () => {
  const [zip, setZip] = useState('');
  const [eventList, setEventList] = useState([]);
  // const [clicks, setClicks] = useState([]); //google maps
  // const [zoom, setZoom] = (3); //google maps
  // const [center, setCenter] = useState({
  //   lat: 0,
  //   lng: 0,
  // }); //google maps

  // const apiKey = 'AIzaSyBFk5zzwelSvDP5WhyFfC5KaSYKiPzZzRE';

  let searchZip;

  console.log(zip);

  useEffect(() => {
    if (zip.length === 5) {
      fetch(`/api/${zip}`)
        .then(res => res.json())
        .then((data) => {
          console.log('events', data);
          setEventList(data);
        })
        .catch(console.error);
    }
  }, [zip]);
  

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <MainNav />
        </Grid>
        <Grid item xs={2}>
          <EventsContainer zip={zip} setZip={setZip} eventList={eventList} />
        </Grid>
        <Grid item xs={8}>
            <MapDisplay />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContainer;