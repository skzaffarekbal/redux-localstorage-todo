import { ADD_TODO, DELETE_TODO, UPDATE_TODO, REMOVE_TODO } from "./types";

export const addTodo = (message) => {
    return {
        type: ADD_TODO,
        message
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

export const updateTodo = ({message, id}) => {
    return {
        type: UPDATE_TODO,
        message,
        id
    }
}

export const removeTodo = () => {
    return {
        type: REMOVE_TODO,
    }
}