/* eslint-disable max-len */
const fetch = require('node-fetch');
const moment = require('moment');
const db = require('../models/psql');


const eventController = {};

eventController.getApiData = async (req, res, next) => {
  try {
    const body = '038FSAKmByGrs9dF4V6NyErna86YKfAR';

    const [resultTicketMaster] = await Promise.all([
      fetch(`https://app.ticketmaster.com/discovery/v2/events.json?postalCode=${req.params.zipCode}&size=30&sort=date,asc&apikey=${body}`),
    ]);

    const tmData = await resultTicketMaster.json();

    const eventsArray = [];

    for(let i = 0; i < tmData['_embedded'].events.length; i++) {

      // covert Time from military to standard
      const newTime = moment(tmData['_embedded'].events[i].dates.start.localTime, 'HH:mm:ss').format('hh:mm A');
      
      //convert short date pattern to long date pattern
      const eventDate = new Date (tmData['_embedded'].events[i].dates.start.localDate).toUTCString().slice(0, 16);
      
      const apiData = {
        id: i,
        postalCode: tmData['_embedded'].events[i]['_embedded'].venues[0].postalCode, //"10013"
        name: tmData['_embedded'].events[i].name,  //"Colbie Caillat"
        classification: tmData['_embedded'].events[i].classifications[0].segment.name, //"Music"
        vendorUrl: tmData['_embedded'].events[i].url, //"https://www.ticketmaster.com/event/Z7r9jZ1AdueAA"
        image: tmData['_embedded'].events[i].images[0].url,  //resize image to 3:2 ratio "https://s1.ticketm.net/dam/a/80f/10134487-adfe-4cc7-88a0-c5f48938580f_10661_ARTIST_PAGE_3_2.jpg" 
        startDate: eventDate, //tmData['_embedded'].events[0].dates.start.localDate, //"Wed March 13, 2022"
        startTime: newTime, //tmData['_embedded'].events[0].dates.start.localTime, //"8:00 PM"
        venue: tmData['_embedded'].events[i]['_embedded'].venues[0].name, //"City Winery - New York"
        city: tmData['_embedded'].events[i]['_embedded'].venues[0].city.name, //"New York"
        state: tmData['_embedded'].events[i]['_embedded'].venues[0].state.stateCode, //"NY"
        address: tmData['_embedded'].events[i]['_embedded'].venues[0].address.line1, //155 Varick Street
        longitude: tmData['_embedded'].events[i]['_embedded'].venues[0].location.longitude, //"-74.0047"
        latitude: tmData['_embedded'].events[i]['_embedded'].venues[0].location.latitude, //"40.7201"
      };

      eventsArray.push(apiData);

    }

    res.locals.localEvents = eventsArray;
    return next();
  } catch (err){
    return next(
    //   {
    //   log: `eventController.getApiData: ERROR: ${typeof err === 'object' ? JSON.stringify(err) : err}`,
    //   message: { err: 'eventController.getApiData: ERROR: Check server logs for details' },
    // }
    );
  }
};


// EXPORT THE CONTROLLER HERE
module.exports = eventController;
