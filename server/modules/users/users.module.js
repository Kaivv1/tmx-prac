const usersRoutes = require('./users.routes.js');

const usersModule = async (fastify, opts) => {
  fastify.register(usersRoutes, { prefix: '/users' });
};

module.exports = usersModule;
