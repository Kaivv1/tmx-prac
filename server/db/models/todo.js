'use strict';
const { Model, Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

class Todo extends Model {
  static associate(models) {
    Todo.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  }
}

Todo.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  {
    timestamps: true,
    sequelize,
    modelName: 'Todo',
    tableName: 'todos',
  }
);

module.exports = Todo;
