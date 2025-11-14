const usersModule = require('./users/users.module');
const todosModule = require('./todos/todos.module');

const root = async (fastify, opts) => {
  fastify.register(usersModule, { prefix: '/api/v1' });
  fastify.register(todosModule, { prefix: '/api/v1' });
};

module.exports = root;
