import './styles.css';

import { Todo, Todolist, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const TodoList = new TodoList();

Todolist.todos.forEach(crearTodoHtml);

/*
const tarea = new Todo('Aprende JavaScript');
todoList.nuevoTodo (tarea);

console.log(tarea);

crearTodoHtml(tarea);


crearTodoHtml(tarea);*/