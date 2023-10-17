import {createSlice} from "@reduxjs/toolkit"
import { TodoState } from "../../Interfaces/interfaces"

const initialState: TodoState = {
    todosBackup: [],
    todos: []
}

export const TodosSlice = createSlice({
    name:"todos",
    initialState: initialState as TodoState,
    reducers:{
        addTodo: (state, action) => {
            const note =  action.payload;
            state.todos.push(note)  
            state.todosBackup.push(note)
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const note = state.todos.find(notes => notes.id === id);
            const noteBackup = state.todosBackup.find(notes => notes.id === id);
            if (note && noteBackup ) {
                note.completed = !note.completed 
                noteBackup.completed = !noteBackup.completed
            }
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter(notes => notes.id !== id)
            state.todosBackup = state.todosBackup.filter(notes => notes.id !== id)
        },
        searchTodo: (state, action) => {
            const wanted = action.payload;
            if (wanted === "") {
                state.todos = state.todosBackup
            }else{
                state.todos = state.todos.filter(todo => todo.text === wanted)
            }
        },
        resetTodos: (state) => {
            state.todos = state.todosBackup
        }

    }
})
export const { addTodo, toggleTodo, removeTodo, searchTodo, resetTodos } = TodosSlice.actions
export default TodosSlice.reducer