const fp = require('fastify-plugin');
const db = require('../db/models/index.js');

module.exports = fp(async (fastify, opts) => {
  const { sequelize } = db;
  // const sequelize = new Sequelize(process.env.DATABASE_URL!, { dialect: "postgres" });

  try {
    await sequelize.authenticate();
    console.log('Connected to db.');
  } catch (error) {
    console.error('Unable to connect to db:', error);
    throw error;
  }

  fastify.decorate('db', db);
});
