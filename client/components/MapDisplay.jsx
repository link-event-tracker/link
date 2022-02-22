/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

//include render/Status?

const MapDisplay = ({google, infoWindow, activeMarker, selectedPlace, markerClicker, closeWindow, eventList, zip}) => {

  

  const mapStyles = {
    marginTop: '20px',
    width: '85vw',
    height: '80vh'
  };

  // const features = eventList.map(el => el = {'position': new google.maps.latLng(eventList.latitude, eventList.longitude)});

  //  new google.maps.Marker({
  //   position: new google.maps.LatLng(40.730610, -73.935242)
  //   map: map,
  //   icon: iconBase + 'parking_lot_maps.png'
  // });
  // const markers = [];
  // useEffect(() => {
  //   if (zip.length === 5) {
  //     // const markerMaker = () => {
  //     console.log('trying to map');
  //     // const { name,
  //     //   startDate,
  //     //   startTime,
  //     //   venue,
  //     //   city,
  //     //   state,
  //     //   price,
  //     //   vendorUrl, 
  //     //   longitude, 
  //     //   latitude } = eventList;
  //     eventList.map((event, i) => {
  //       console.log('making map', event, Number(event.latitude), Number(event.longitude));
  //       markers.push(
  //         <Marker id={i} 
  //           {...event}  
  //           onClick={markerClicker}
  //           position={{lat: Number(event.latitude), lng: Number(event.longitude)}}
  //           // name={name}
  //           // venue={venue}
  //           // startDate={startDate}
  //           // startTime={startTime}
  //           // vendorUrl={vendorUrl}
  //         />);
  //     });  
  //   }
  //   // }
  // }, [zip, eventList]);

  
  // const markerMaker = () => {
  //   // const { name,
  //   //   startDate,
  //   //   startTime,
  //   //   venue,
  //   //   city,
  //   //   state,
  //   //   price,
  //   //   vendorUrl, 
  //   //   longitude, 
  //   //   latitude } = eventList;
  //   eventList.map((event, i) => {
  //     console.log(event);
  //     markers.push(
  //       <Marker id={i} 
  //         {...event}  
  //         onClick={markerClicker}
  //         position={{lat: event.latitude, lng: event.longitude}}
  //         // name={name}
  //         // venue={venue}
  //         // startDate={startDate}
  //         // startTime={startTime}
  //         // vendorUrl={vendorUrl}
  //       />);
  //   });  
   
  // };

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
      zoom={14}
      style={mapStyles}
      initialCenter={
        {
          lat: 40.730610,
          lng: -73.935242
        }
      } >
      {/* {markers} */}
      {eventList.map((event, idx) => markerMaker(event, idx))}
      {/* <Marker onClick={markerClicker} name={'Marker!'} />
      <Marker onClick={markerClicker} name={'I made a marker!'} position={{ lat: 40.730610, lng: -74 }} /> */}
      <InfoWindow marker={activeMarker} visible={infoWindow} onClose={closeWindow}>
        <div>
          <h4>{selectedPlace.name} {selectedPlace.venue} {selectedPlace.startTime} {selectedPlace.startDate} {selectedPlace.url}</h4>
        </div>
   
      </InfoWindow>
    </Map>
  );
};





export default GoogleApiWrapper({
  apiKey: 'AIzaSyBFk5zzwelSvDP5WhyFfC5KaSYKiPzZzRE'
})(MapDisplay);