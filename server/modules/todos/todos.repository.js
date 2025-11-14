class TodosRepository {
  constructor(db) {
    this.db = db;
  }

  async create(newTodo) {
    return this.db.todo.create(newTodo);
  }

  async getAllByUserId(userId) {
    return this.db.todo.findAll({ where: { userId } });
  }
}

module.exports = { TodosRepository };
