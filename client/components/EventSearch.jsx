import React from 'react';

const EventSearch = ({
  zip,
  setZip
}) => (
  <div className="dateBox">
    <input
      id="zip"
      value={zip}
      onChange={e => setZip(e.target.value)}
    />
  </div>
);

export default EventSearch;