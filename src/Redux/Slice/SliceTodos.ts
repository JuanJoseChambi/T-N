import {createSlice} from "@reduxjs/toolkit"
import { TodoState } from "../../Interfaces/interfaces"

const initialState: TodoState = {
    todos: []
}

export const TodosSlice = createSlice({
    name:"todos",
    initialState: initialState as TodoState,
    reducers:{
        addTodo: (state, action) => {
            const note =  action.payload;
            state.todos.push(note)  
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const note = state.todos.find(notes => notes.id === id);
            if (note) {
                note.completed = !note.completed
            }

        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter(notes => notes.id !== id)
        }
    }
})
export const { addTodo, toggleTodo, removeTodo } = TodosSlice.actions
export default TodosSlice.reducer