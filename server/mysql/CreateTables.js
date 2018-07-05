const mysql = require('mysql');
const { user, userRestRelation } = require('./schema/user');
const { restaurant } = require('./schema/restaurant');

const createTables = () => {
  const conn = mysql.createConnection({
    host: 'localhost',
    port: 33060,
    user: 'root',
    password: 'example',
    database: 'ttn',
  });
  conn.connect();

  // Create tables.
  conn.query(user.table);
  conn.query(restaurant.table);
  conn.query(userRestRelation.table);

  // Insert data into tables.
  conn.query(user.data);
  conn.query(restaurant.data);
  conn.query(userRestRelation.data);

  conn.end();
};

createTables();
