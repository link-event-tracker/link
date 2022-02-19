/* eslint-disable max-len */
const { Pool, Client } = require('pg')

// const pool = new Pool({
//   user: process.env.PSQL_USER,
//   host: process.env.PSQL_HOST,
//   database: 'local-events',
//   password: process.env.PSQL_PW,
//   port: process.env.PSQL_PORT
// });

const PG_URI = 'postgres://cdllvymv:y-dcr7m52GFsxaCXqcWFW9CwbFCAkmKu@jelani.db.elephantsql.com/cdllvymv';

const pool = new Pool({
  connectionString: PG_URI,
});


/*
CREATE TABLE events (
id SERIAL PRIMARY KEY, 
postal_code VARCHAR,  
name VARCHAR, 
classification VARCHAR, 
vendor_url VARCHAR, 
image VARCHAR, 
start_date VARCHAR, 
start_time VARCHAR, 
venue VARCHAR, 
city VARCHAR, 
state VARCHAR, 
address VARCHAR, 
longitude VARCHAR, 
latitude VARCHAR 
);
*/

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};