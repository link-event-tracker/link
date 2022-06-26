import React, { useState, useEffect, useRef } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const MapDisplay = ({
  google,
  infoWindow,
  activeMarker,
  selectedPlace,
  markerClicker,
  closeWindow,
  eventList,
  mapCenter
}) => {
  const mapStyles = {
    marginTop: '20px',
    width: '79vw',
    height: '83vh'
  };

  const markerMaker = (event, idx, props) => (
    <Marker
      {...event}
      key={idx}
      onClick={markerClicker}
      position={{lat: Number(event.latitude), lng: Number(event.longitude)}}
    />
  );

  return (
    <Map id='mello' className='hello' google={google}
      zoom={12}
      style={mapStyles}
      initialCenter={
        {
          lat: 40.71838788361567,
          lng: -74.00332705168239
        }
      }
      center={mapCenter}
    >
      {eventList.map((event, idx) => markerMaker(event, idx))}
      <InfoWindow marker={activeMarker} visible={infoWindow} onClose={closeWindow}>
        <div style={{color: 'black', textAlign: 'center', margin: '20px'}}>
          <h3 style={{textDecoration: 'underline'}}>
            <a href={selectedPlace.url} target="_blank" rel="noopener noreferrer">
              {selectedPlace.name}
            </a>
          </h3>
          <h4>{selectedPlace.venue}</h4>
          <h4>Starting at {selectedPlace.startTime} on {selectedPlace.startDate}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFk5zzwelSvDP5WhyFfC5KaSYKiPzZzRE'
})(MapDisplay);