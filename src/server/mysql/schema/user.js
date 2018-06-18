/**
 * Defines the user table of the database.
 * @type {String}
 */
module.exports = {
  user: `
    CREATE TABLE IF NOT EXISTS user(
      uid INT(11) NOT NULL AUTO_INCREMENT,
      joined DATE DEFAULT NULL,
      last_login DATE DEFAULT NULL,
      email VARCHAR(255) NOT NULL,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      PRIMARY KEY (uid)
    );
  `,
};
