/**
 * Defines the user table of the database.
 * @type {String}
 */
module.exports = {
  user: {
    table: `
      CREATE TABLE IF NOT EXISTS user(
        uid INT(11) NOT NULL AUTO_INCREMENT,
        joined DATE NOT NULL,
        last_login DATE DEFAULT NULL,
        email VARCHAR(255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        status INT(5) NOT NULL,
        PRIMARY KEY (uid)
      );
    `,
    data: `
      INSERT INTO user (uid, joined, email, first_name, last_name, password, status)
      VALUES (1, STR_TO_DATE('1-01-2012', '%d-%m-%Y'), 'test@test.test', 'First', 'Last', 'pass', 1);
    `,
  },
  userRestRelation: {
    table: `
      CREATE TABLE IF NOT EXISTS user_restaurant_relation(
        uid INT(11) NOT NULL,
        rid INT(11) NOT NULL,

        INDEX (uid),
        INDEX (rid),

        FOREIGN KEY (uid)
          REFERENCES user(uid)
          ON DELETE CASCADE,

        FOREIGN KEY (rid)
          REFERENCES restaurant(rid)
          ON DELETE CASCADE
      );
    `,
    data: `
      INSERT INTO user_restaurant_relation (uid, rid)
      VALUES (1, 1);
    `,
  },
};
