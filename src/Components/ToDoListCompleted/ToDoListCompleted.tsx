import style from "./ToDoListCompleted.module.scss"
import { useSelector } from "react-redux";
import { RootState } from "../../Interfaces/interfaces";
import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoListCompleted() {
    const { todos } = useSelector((state: RootState) => state.todos);
    const todosOrder = [...todos].reverse();
    return (
      <div className={style.viewToDoList}>
        <p className={style.titleToDoList}>To Do List</p>
        <div className={style.containerTodos}>
          {todosOrder.map((todo) => (
            <ToDoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </div>
      </div>
    );
}

export default ToDoListCompleted