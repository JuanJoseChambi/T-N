import style from "./ToDoList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../Interfaces/interfaces";
import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoList() {
  const { todos } = useSelector((state: RootState) => state.todos)

  return (
    <div className={style.viewToDoList}>
        <h1>To Do List</h1>
        {todos.map(todo => (
          <ToDoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
        ))}
    </div>
  )
}

export default ToDoList