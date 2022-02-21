import React, { useState, useEffect, useRef } from 'react';

//include render/Status?

const MapDisplay = ({
  center, 
  zoom,
  onClick,
  onIdle,
  children,
  ...options
}) => {

  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  React.useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

  return <div id="map" ref={ref} className="googlemap" style="width=50%"/>;
};





export default MapDisplay;