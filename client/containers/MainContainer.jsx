/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


import Button from '@mui/material/Button';
import MainNav from '../components/MainNav';
import EventsContainer from './EventsContainer';
import MapDisplay from '../components/MapDisplay';
import MapMarker from '../components/MapMarker';

import { Wrapper, Status } from '@googlemaps/react-wrapper';

const MainContainer = () => {
  const [zip, setZip] = useState('');
  const [eventList, setEventList] = useState([]);
  const [clicks, setClicks] = useState([]); //google maps
  const [zoom, setZoom] = (3); //google maps
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  }); //google maps
  const [position, setPosition] = useState();

  // const apiK;ey = 'AIzaSyBFk5zzwelSvDP5WhyFfC5KaSYKiPzZzRE';

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

  const render = (status) => {
    return <h1>{status}</h1>;
  };
  
  return (
    <Container sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <MainNav />
        </Grid>
        <Grid item xs={3}>
          <EventsContainer zip={zip} setZip={setZip} eventList={eventList} />
        </Grid>
        <Grid item xs={7}>
          <Wrapper apiKey={'AIzaSyBFk5zzwelSvDP5WhyFfC5KaSYKiPzZzRE'} render={render}>
            <MapDisplay center={center} zoom={zoom} >
              <MapMarker position={position}/>
            </MapDisplay>
          </Wrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContainer;