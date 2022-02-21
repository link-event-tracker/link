/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

//include render/Status?

const MapDisplay = ({google, infoWindow, activeMarker, selectedPlace, markerClicker, closeWindow, eventList}) => {

  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  const markers = eventList.map((event, i) => {
    <Marker id={i} event={event} onClick={markerClicker} name={'Kenyatta International Convention Centre'}/>
  });

  return (
    <Map google={google}
      zoom={14}
      style={mapStyles}
      initialCenter={
        {
          lat: 42.730610,
          lng: -73.935242
        }
      } >
      <Marker onClick={markerClicker} name={'Kenyatta International Convention Centre'}/>
      <InfoWindow marker={activeMarker} visible={infoWindow} onClose={closeWindow}>
        <div>
          <h4>{selectedPlace.name}</h4>
        </div>
      </InfoWindow>
    </Map>
  );
};





export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFk5zzwelSvDP5WhyFfC5KaSYKiPzZzRE'
})(MapDisplay);