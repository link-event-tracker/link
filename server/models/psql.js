const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PSQL_USER,
  host: process.env.PSQL_HOST,
  database: 'local-events',
  password: process.env.PSQL_PW,
  port: process.env.PSQL_PORT
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};