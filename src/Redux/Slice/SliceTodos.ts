import {createSlice} from "@reduxjs/toolkit"
import { TodoState } from "../../Interfaces/interfaces"
import * as actions from "../Actions/Actions"

const initialState: TodoState = {
    todos: []
}

export const TodosSlice = createSlice({
    name:"todos",
    initialState: initialState as TodoState,
    reducers:{
        addTodo: (state, action) => {

        },
        toggleTodo: (state, action) => {

        },
        removeTodo: (state, action) => {

        }
    }
})
export const { addTodo, toggleTodo, removeTodo } = TodosSlice.actions
export default TodosSlice.reducer