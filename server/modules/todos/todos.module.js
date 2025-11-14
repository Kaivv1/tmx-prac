const todosRoutes = require('./todos.routes');

const todosModule = async (fastify, opts) => {
  fastify.register(todosRoutes, { prefix: '/todos' });
};

module.exports = todosModule;
