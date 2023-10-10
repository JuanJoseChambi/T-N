import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction<string>("todos/addTodos")
export const toggleTodo = createAction<string>("todos/toggleTodo")
export const removeTodo = createAction<string>("todos/removeTodo")
