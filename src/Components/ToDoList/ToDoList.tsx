import style from "./ToDoList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../Interfaces/interfaces";
import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoList() {
  const { todos } = useSelector((state: RootState) => state.todos);
  const todosOrder = [...todos].reverse().filter(todos => todos.completed === false);
  return (
    <div className={style.viewToDoList}>
      <p className={style.titleToDoList}>To Do Incomplete</p>
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
