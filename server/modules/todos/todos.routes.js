const { TodosControllers } = require('./todos.controllers');

const todosRoutes = async (fastify, options) => {
  const controllers = new TodosControllers(fastify);

  fastify.get('/test', (req, res) => {
    return { todos: [{ id: 1, name: 'asd' }] };
  });

  fastify.post('/', controllers.createTodo);

  fastify.get('/:id', controllers.getAllUserTodos);
};

module.exports = todosRoutes;
