'use strict';

let todo = require('./lib/todo');

module.exports.getAllTodos = (event, context, callback) => {
  console.log('testing getAll');
  todo.getAllTodos(event, callback);
};

module.exports.createTodo = (event, context, callback) => {
  console.log('testing create');
  todo.createTodo(event, callback);
};

module.exports.updateTodo = (event, context, callback) => {
  console.log('testing update');
  todo.updateTodo(event, callback);
};

module.exports.updateTodoStatus = (event, context, callback) => {
  console.log('testing update1');
  todo.updateTodoStatus(event, callback);
};

module.exports.deleteTodo = (event, context, callback) => {
  todo.deleteTodo(event, callback);
};