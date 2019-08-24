"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function todoReducer(action, state = { todos: [] }) {
    switch (action.type) {
        case "Add": {
            return {
                todos: [...state.todos, action.payload],
            };
        }
        case "Remove All": {
            return {
                todos: [],
            };
        }
        case "Remove One": {
            return {
                todos: state.todos.slice(action.payload, action.payload + 1),
            };
        }
        default:
            return state;
    }
}
