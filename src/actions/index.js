// src/actions/index.js

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(item) {
    return {
        type: ADD_TODO,
        payload: item
    }
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}
