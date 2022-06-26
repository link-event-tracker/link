const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const eventController = require('./controllers/eventController.js');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());

if(process.env.NODE_ENV === 'production'){
  app.use('/dist', express.static(path.join(__dirname, '../dist')));
  app.get('/', (req, res) => {
    return res
      .status(200)
      .sendFile(path.join(__dirname, '../client/index.html'));
  });
}

app.get('/api/:zipCode/:filters', eventController.getApiData, (req, res) => {
  return res.status(200).json(res.locals.localEvents);
});

app.use((req, res) => res.status(404).send('Page not found.'));

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