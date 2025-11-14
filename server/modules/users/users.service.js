const { UsersRepository } = require('./users.repository.js');

class UsersService {
  repo;
  constructor(fastify) {
    this.repo = new UsersRepository(fastify.db);
  }

  async createUser(params) {
    console.log('params in createUser');
    console.log(params);
    return this.repo.create(params);
  }

  async getUser(id) {
    return this.repo.findOneById(id);
  }
}

module.exports = { UsersService };
