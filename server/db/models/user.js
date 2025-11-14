'use strict';
const { Model, Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

class User extends Model {
  static associate(models) {
    User.hasMany(models.Todo, { foreignKey: 'userId', as: 'todos', onDelete: 'CASCADE' });
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'User',
    tableName: 'users',
  }
);

module.exports = User;
