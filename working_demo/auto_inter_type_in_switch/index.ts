import {
    Add,
    TodoActions,
  } from './todo.action';
  
  interface ITodoState {
    todos: string[];
  }
  
  function todoReducer(
    action: TodoActions,
    state: ITodoState = { todos: [] }
  ): ITodoState {
    switch (action.type) {
      case "Add": {
        return {
          todos: [...state.todos, action.payload],
        };
      }
      case "Remove All": {
        return {
          todos: [],
        }
      }
      case "Remove One": {
        return {
          todos: state.todos.slice(action.payload, action.payload + 1),
        };
      }
      default:
        return state
    }
  }