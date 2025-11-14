const { UsersControllers } = require('./users.controllers.js');

const usersRoutes = async (fastify, options) => {
  const controllers = new UsersControllers(fastify);

  fastify.get('/test', (req, res) => {
    return { users: [{ id: 1, name: 'asd' }] };
  });
  fastify.get('/:id', controllers.register);
  fastify.post('/', controllers.register);
};

module.exports = usersRoutes;
