const { TodosService } = require('./todos.service');

class TodosControllers {
  todosService;

  constructor(fastify) {
    this.todosService = new TodosService(fastify);
    this.createTodo = this.createTodo.bind(this);
    this.getAllUserTodos = this.getAllUserTodos.bind(this);
  }

  async createTodo(req, res) {
    try {
      console.log(req.body);
      return await this.todosService.createTodo(req.body);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllUserTodos(req, res) {
    try {
      console.log('req.params.id');
      console.log(req.params.id);
      return await this.todosService.getAllUserTodos(req.params.id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = { TodosControllers };
