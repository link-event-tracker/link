const fetch = require('node-fetch');
const db = require('../models/psql');


const saveController = {};

saveController.getFavorites = (req, res, next) => {
  const checkQuery = 'SELECT * FROM events';
  
  if(db.query(checkQuery)) {
    return next();
  } else {
    return next({
      log: 'saveController.getFavorites: ERROR: No available favorites',
      message: { err: 'saveController.getFavorites: ERROR: Check server logs for details'},
    });
  }
};

saveController.addFavorites = (req, res, next) => {
  const ticketValue =
    [req.body.postalCode, req.body.name, req.body.classification, req.body.vendorUrl,
      req.body.image, req.body.startDate, req.body.startTime, req.body.venue, req.body.city,
      req.body.state, req.body.address, req.body.longitude, req.body.latitude];
  const ticketQuery = 'INSERT INTO events(postal_code, name, classification, vendor_url, image, start_date, start_time, venue, city, state, address, longitude, latitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)';
    
  db.query(ticketQuery, ticketValue)
    .then((data) => { 
      return next();
    })
    .catch(err => {
      return next({
        log: `saveController.addFavorites: ERROR: Unable to add favorites ${err}`,
        message: { err: 'saveController.getFavorites: ERROR: Check server logs for details'},
      });
    });
};

saveController.deleteFavorites = (req, res, next) => {
  const deleteQuery = `DELETE FROM events WHERE postal_code = ${req.body.postalCode} AND name = ${req.body.name} AND start_date = ${req.body.startDate}`;
  db.query(deleteQuery)
    .then((data) => { 
      return next();
    })
    .catch(err => {
      return next({
        log: `saveController.deleteFavorites: ERROR: Unable to delete favorites ${err}`,
        message: { err: 'saveController.deleteFavorites: ERROR: Check server logs for details'},
      });
    });
};

module.exports = saveController;