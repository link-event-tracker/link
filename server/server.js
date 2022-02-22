const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const axios = require('axios'); // necessary here?
const jwt = require('jsonwebtoken'); // necessary here?

const port = process.env.PORT || 3000;

const app = express();

/**
 * handle parsing request body
 */
app.use(express.json()); // still necessary with cookie and body parsers? correct order?
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * handle requests for static files
 */
const eventController = require('./controllers/eventController.js');


if(process.env.NODE_ENV === 'production'){
  console.log('in production');
  // statically serve everything in the build folder on the route '/build'
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.join(__dirname, '../client/index.html'));
  });
}

/**
 * define route handlers
 */
app.get('/api/:zipCode/:filters', eventController.getApiData, (req, res) => {
  return res.status(200).json(res.locals.localEvents);
});




// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Page not found.'));

/**
 * express error handler
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;