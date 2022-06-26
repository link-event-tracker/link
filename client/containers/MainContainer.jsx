import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MainNav from '../components/MainNav';
import EventsContainer from './EventsContainer';
import MapDisplay from '../components/MapDisplay';

const MainContainer = () => {
  const [zip, setZip] = useState('');
  const [eventList, setEventList] = useState([]);
  const [infoWindow, setInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});
  const [filters, setFilters] = useState([]);
  const [mapCenter, setMapCenter] = useState();
  const [initialSearch, setInitialSearch] = useState(true);

  const handleFilters = (event, newFilters) => {
    setFilters(newFilters);
  };

  let x;
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      x = document.getElementById('location');
      x.innerHTML = 'Geolocation is not supported by this browser.';
    }
  }


  function showError(error) {
    switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = 'User denied the request for Geolocation.';
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = 'Location information is unavailable.';
      break;
    case error.TIMEOUT:
      x.innerHTML = 'The request to get user location timed out.';
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = 'An unknown error occurred.';
      break;
    }
  }

  function showPosition(position) {
    location.innerHTML = 'Latitude: ' + position.coords.latitude + 
    '<br>Longitude: ' + position.coords.longitude; 
    const latlon = position.coords.latitude + ',' + position.coords.longitude;

    fetch(`/api/${latlon}/${JSON.stringify(filters)}`)
      .then(res => res.json())
      .then((data) => {
        setEventList(data);
        setMapCenter({ lat: position.coords.latitude, lng: position.coords.longitude});
      })
      .catch((err) => {
        console.error;
      });
  }

  let searchZip;

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
    if (initialSearch) {
      setInitialSearch(false);
      getLocation();
    }
    if (zip.length === 5) {
      const reqFilters = JSON.stringify(filters);
      fetch(`/api/${zip}/${reqFilters}`)
        .then(res => res.json())
        .then((data) => {
          setEventList(data);
          setMapCenter({ lat: data[0].latitude, lng: data[0].longitude});
        })
        .catch((err) => {
          console.error;
          setEventList([]);
        });
    }
    else {
      setEventList([]);
    }
  }, [zip, filters]);

  return (
    <div className='top' style={{width: '100vw', height:'100vh'}}>
      <Container maxWidth={false} sx={{ p: 2}}>
        <MainNav/>
        <Grid container spacing={2}>
          <Grid minWidth="300px" item xs={2.2}>
            <EventsContainer zip={zip} setZip={setZip} eventList={eventList}
              filters={filters} handleFilters={handleFilters} />
          </Grid>
          <Grid item xs={9}>
            <MapDisplay eventList={eventList} infoWindow={infoWindow} activeMarker={activeMarker}
              selectedPlace={selectedPlace} markerClicker={markerClicker} closeWindow={closeWindow}
              zip={zip} mapCenter={mapCenter} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainContainer;