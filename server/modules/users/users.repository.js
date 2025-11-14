class UsersRepository {
  constructor(db) {
    this.db = db;
  }

  async create(newUser) {
    return this.db.user.create(newUser, { returning: true });
  }

  async update(updatedUser, id) {
    return await this.db.user.update({ ...updatedUser }, { where: { id } });
  }

  async findOneById(id) {
    return this.db.user.findByPk(id);
  }

  async findOneByEmail(email) {
    return this.db.user.findOne({ where: { email } });
  }

  async delete(id) {
    const user = await this.findOneById(id);
    await user.destroy();
  }
}

module.exports = { UsersRepository };
