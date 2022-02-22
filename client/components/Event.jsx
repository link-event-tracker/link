import React from 'react';
import DateBox from './DateBox';
import ShareButton from './ShareButton';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

const Event = ({
  name,
  startDate,
  startTime,
  venue,
  city,
  state,
  price,
  vendorUrl,
  image
}) => {
  const modVenue = venue.replace(`- ${city}`, '');

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'event-modal' : undefined;

  console.log('url', vendorUrl);
  return (
    <Paper sx={{
      borderRadius: 5,
      p: 1,
      backgroundColor: '#E8E8E8',
      color: '#00303F',
    }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body2">{startDate} at {startTime}</Typography>
          <Typography variant="body2">{modVenue} · {city}, {state}</Typography>
        </Grid>
        <Grid item xs={3}>
          <DateBox startDate={startDate} />
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item xs={6}>
          <Button aria-describedby={id}
            onClick={handleClick} 
            startIcon={<BookmarkAddIcon />} 
            variant='text'>MORE INFO</Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <a href={vendorUrl} target="_blank" rel="noopener noreferrer">
              <Paper x={{ p: 2 }}>
              
                <img
                  src={image}
                  srcSet={image}
                  alt={name}
                  loading="lazy"
                  width='300px'
                  height='200px'
                />
           
                <Typography variant='h5' align='center' >
                  Click to purchase tickets
                </Typography>
              </Paper>
            </a>
          </Popover>
        </Grid>
        <Grid item xs={6}>
          {/* <Button variant='text'>SHARE</Button> */}
          <ShareButton url={vendorUrl} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Event;