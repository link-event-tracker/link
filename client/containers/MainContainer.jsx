import React, {useState} from 'react';
import Container from '@mui/material/Container';

import MainNav from '../components/MainNav';
import EventsContainer from './EventsContainer';
import MapDisplay from '../components/MapDisplay';

const MainContainer = () => {
  const [zip, setZip] = useState('');

  console.log(zip);

  if (zip.length === 5) {
    console.log('fetching');
  }

  return (
    <Container>
      <MainNav />
      <EventsContainer zip={zip} setZip={setZip} />
      <MapDisplay />
    </Container>
  );
};

export default MainContainer;