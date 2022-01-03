import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../constants";

let nextTodoId = -1
export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: ++nextTodoId,
        text:text
    }
}
export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        id
    }
}
export function updateTodo(id,text) {
    return {
        type: UPDATE_TODO,
        id:id,
        text:text
    }
}
