import { createAction } from "@reduxjs/toolkit";
import { Todo } from "../../Interfaces/interfaces";

export const addTodo = createAction<Todo>("todos/addTodo")
export const toggleTodo = createAction<string>("todos/toggleTodo")
export const removeTodo = createAction<string>("todos/removeTodo")
export const upDateNoteTodo = createAction<Todo>("todos/upDateNoteTodo")
export const searchTodo = createAction<string>("todos/searchTodo")
export const resetTodos = createAction<void>("todos/resetTodos")
export const filterToDos = createAction<void>("todos/filterToDos")
export const filterNotes = createAction<void>("todos/filterNotes")

