import { createAction } from "@reduxjs/toolkit";
import { Todo } from "../../Interfaces/interfaces";

export const addTodo = createAction<Todo>("todos/addTodo")
export const toggleTodo = createAction<string>("todos/toggleTodo")
export const removeTodo = createAction<string>("todos/removeTodo")
