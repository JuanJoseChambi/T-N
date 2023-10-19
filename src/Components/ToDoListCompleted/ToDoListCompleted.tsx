import style from "./ToDoListCompleted.module.scss"
import { useSelector } from "react-redux";
import { RootState } from "../../Interfaces/interfaces";
import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoListCompleted() {
    const { todos } = useSelector((state: RootState) => state.todos);
    const todosOrder = [...todos].reverse().filter(todos => todos.completed === true);
    return (
      <div className={style.viewToDoList}>
        <p className={style.titleToDoList}>Tareas Completas</p>
        <div className={style.containerTodos}>
        {todosOrder.length > 0 ? todosOrder.map((todo) => (
          <ToDoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            text={todo.text}
            completed={todo.completed}
            date={todo.date? todo.date: null}
          />
        )): 
       ( <div className={style.notTodos}>
          <p>No Hay Tareas Completadas</p>
        </div>)
        }
        </div>
      </div>
    );
}

export default ToDoListCompleted