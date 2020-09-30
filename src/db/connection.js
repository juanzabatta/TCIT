const { Pool  } = require('pg');

const config = {
  user: 'postgres',
  host: 'localhost',
  database: 'prueba_3_tcit',
  password: '12345',
  port: 5432
};

const pool = new Pool(config);

module.exports = pool;