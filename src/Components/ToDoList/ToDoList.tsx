import style from "./ToDoList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../Interfaces/interfaces";
import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoList() {
  const { todos } = useSelector((state: RootState) => state.todos);
  const todosOrder = [...todos].reverse();
  return (
    <div className={style.viewToDoList}>
      <h1>To Do List</h1>
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

export default ToDoList;
