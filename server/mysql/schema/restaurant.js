/**
 * Defines the restaurant table of the database.
 * @type {String}
 */
module.exports = {
  restaurant: {
    table: `
      CREATE TABLE IF NOT EXISTS restaurant(
        rid INT(11) NOT NULL AUTO_INCREMENT,
        created DATE NOT NULL,
        name VARCHAR(255) NOT NULL,
        description TEXT DEFAULT NULL,
        status INT(5) NOT NULL,
        PRIMARY KEY (rid)
      );
    `,
    data: `
      INSERT INTO restaurant (rid, created, name, description, status)
      VALUES (1, STR_TO_DATE('1-01-2012', '%d-%m-%Y'), 'Tester', 'Description', 1);
    `,
  },
};
