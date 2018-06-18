const mysql = require('mysql');
const { user } = require('./schema/user');

const createTables = () => {
  const conn = mysql.createConnection({
    host: 'localhost',
    port: 33060,
    user: 'root',
    password: 'example',
    database: 'ttn',
  });
  conn.connect();
  conn.query(user);
  conn.end();
};

createTables();
