'use strict';

const db = require('./database');
const Sequelize = require('sequelize');

// Make sure you have `postgres` running!

//---------VVVV---------  your code below  ---------VVV----------

const Task = db.define('Task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  complete: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  due: Sequelize.DATE,
});

// function clearCompleted() {
//   Task.destroy({ where: { complete: true } });
// }

const clearCompleted = () => {
  Task.destroy({ where: { complete: true } });
};
Task.belongsTo(Task, { as: 'parent' });

//---------^^^---------  your code above  ---------^^^----------

module.exports = Task;
