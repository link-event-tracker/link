/* eslint-disable max-len */
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
  const [infoWindow, setInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  // const apiKey = 'AIzaSyBFk5zzwelSvDP5WhyFfC5KaSYKiPzZzRE';


  let searchZip;

  console.log(zip);

  const markerClicker = (selected, marker) => {
    setSelectedPlace(selected);
    setActiveMarker(marker);
    setInfoWindow(true);
  };

  const closeWindow = () => {
    if (infoWindow === true) {
      setInfoWindow(false);
      setActiveMarker(null);
    }
  };
  
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
    <Container sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <MainNav />
        </Grid>
        <Grid item xs={3}>
          <EventsContainer zip={zip} setZip={setZip} eventList={eventList}/>
        </Grid>
        <Grid item xs={7}>
          <MapDisplay eventList={eventList} infoWindow={infoWindow} activeMarker={activeMarker} selectedPlace={selectedPlace} markerClicker={markerClicker} closeWindow={closeWindow} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainContainer;
