import {createSlice} from "@reduxjs/toolkit"
import { Todo, TodoState } from "../../Interfaces/interfaces"
import { useLocalStorage } from "../../Hooks/useLocalStorage"

const { getItemFromLocalStorage, setItemInLocalStorage } = useLocalStorage()

const todosFromLocalStorage = getItemFromLocalStorage("Todos");
const parsedTodos  = todosFromLocalStorage ? JSON.parse(todosFromLocalStorage) : [];

const initialState: TodoState = {
    todosBackup: parsedTodos  ,
    todos: parsedTodos 
}

const saveTodosToLocalStorage = (todosBackup: Todo[]) => {
    setItemInLocalStorage("Todos", todosBackup);
  };

export const TodosSlice = createSlice({
    name:"todos",
    initialState: initialState as TodoState,
    reducers:{
        addTodo: (state, action) => {
            const note =  action.payload;
            state.todos.push(note)  
            state.todosBackup.push(note)
            saveTodosToLocalStorage( state.todosBackup)
        },
        toggleTodo: (state, action) => {
            const id = action.payload;
            const note = state.todos.find(notes => notes.id === id);
            const noteBackup = state.todosBackup.find(notes => notes.id === id);
            if (note && noteBackup ) {
                note.completed = !note.completed 
                noteBackup.completed = !noteBackup.completed
            }
            saveTodosToLocalStorage( state.todosBackup)
        },
        removeTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter(notes => notes.id !== id)
            state.todosBackup = state.todosBackup.filter(notes => notes.id !== id)
            saveTodosToLocalStorage( state.todosBackup)
        },
        upDate: (state, action) => {
            const id = action.payload;
            const update = action.payload
            let upDateNoteBackUp = state.todosBackup.find(todos => todos.id === id)
            let upDateNote = state.todos.find(todos => todos.id === id)
            if (upDateNote && upDateNoteBackUp) {
                upDateNote = update
                upDateNoteBackUp = update
            }
        },
        searchTodo: (state, action) => {
            const wanted = action.payload;
            state.todos = state.todosBackup.filter((todo) => {
                const textMatch = todo.text && todo.text.toLowerCase().includes(wanted.toLowerCase());
                const titleMatch = todo.title && todo.title.toLowerCase().includes(wanted.toLowerCase());
                return textMatch || titleMatch;
            });
        },
        resetTodos: (state) => {
            state.todos = state.todosBackup
        }

    }
})
export const { addTodo, toggleTodo, removeTodo, searchTodo, resetTodos } = TodosSlice.actions
export default TodosSlice.reducer