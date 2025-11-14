const { TodosRepository } = require('./todos.repository');

class TodosService {
  repo;
  constructor(fastify) {
    this.repo = new TodosRepository(fastify.db);
  }

  async createTodo(params) {
    return this.repo.create(params);
  }

  async getAllUserTodos(id) {
    const todos = await this.repo.getAllByUserId(id);
    console.log(todos);
    return todos;
  }
}

module.exports = { TodosService };
