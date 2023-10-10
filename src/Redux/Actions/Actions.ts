import { createAction } from "@reduxjs/toolkit";
import { Todo } from "../../Interfaces/interfaces";

export const addTodo = createAction<Todo>("todos/addTodos")
export const toggleTodo = createAction<boolean>("todos/toggleTodo")
export const removeTodo = createAction<boolean>("todos/removeTodo")
