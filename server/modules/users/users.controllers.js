const { UsersService } = require('./users.service.js');

class UsersControllers {
  usersService;

  constructor(fastify) {
    this.usersService = new UsersService(fastify);
    this.register = this.register.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  async register(req, res) {
    try {
      console.log(req.body);
      return await this.usersService.createUser(req.body);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getUser(req, res) {
    try {
      return await this.usersService.getUser(req.body);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = { UsersControllers };
