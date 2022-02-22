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
  const [filters, setFilters] = useState([]);
  const [mapCenter, setMapCenter] = useState();
  // const [searchByZip, setSearchByZip] = useState(false);
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
    // const location = document.getElementById('location');
    // console.log('position', position.coords.longitude, position.coords.latitude);
    location.innerHTML = 'Latitude: ' + position.coords.latitude + 
    '<br>Longitude: ' + position.coords.longitude; 
    const latlon = position.coords.latitude + ',' + position.coords.longitude;

    // fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=pLOeuGq2JL05uEGrZG7DuGWu6sh2OnMz&latlong=${latlon}`)
    fetch(`/api/${latlon}/${JSON.stringify(filters)}`)
      .then(res => res.json())
      .then((data) => {
        // console.log('events', data);
        setEventList(data);
        setMapCenter({ lat: position.coords.latitude, lng: position.coords.longitude});
      })
      .catch((err) => {
        console.error;
        // setEventList([]);
      });
    
    // $.ajax({
    //   type:'GET',
    //   url:'https://app.ticketmaster.com/discovery/v2/events.json?apikey=pLOeuGq2JL05uEGrZG7DuGWu6sh2OnMz&latlong=' + latlon,
    //   async:true,
    //   dataType: 'json',
    //   success: function(json) {
    //     console.log(json);
    //     var e = document.getElementById('events');
    //     e.innerHTML = json.page.totalElements + ' events found.';
    //     showEvents(json);
    //     initMap(position, json);
    //   },
    //   error: function(xhr, status, err) {
    //     console.log(err);
    //   }
    // });

  }

  


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
    // console.log('boolean', initialSearch);
    // console.log('filters front', filters);
    if (initialSearch) {
      setInitialSearch(false);
      getLocation();
    }
    if (zip.length === 5) {
      // setSearchByZip(true);
      const reqFilters = JSON.stringify(filters);
      fetch(`/api/${zip}/${reqFilters}`)
        .then(res => res.json())
        .then((data) => {
          // console.log('events', data);
         
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
          {/* <Grid item xs={2}>
            
          </Grid> */}
          <Grid minWidth="300px" item xs={2.2}>
            <EventsContainer zip={zip} setZip={setZip} eventList={eventList} filters={filters} handleFilters={handleFilters} />
          </Grid>
          <Grid item xs={9}>
            <MapDisplay eventList={eventList} infoWindow={infoWindow} activeMarker={activeMarker} selectedPlace={selectedPlace} markerClicker={markerClicker} closeWindow={closeWindow} zip={zip} mapCenter={mapCenter} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MainContainer;
