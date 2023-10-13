import { useDispatch } from "react-redux";
import { Todo } from "../../Interfaces/interfaces"
import style from "./ToDoItem.module.scss";
import { removeTodo, toggleTodo } from "../../Redux/Actions/Actions";

function ToDoItem({id, text, completed } : Todo) {
  const dispatch = useDispatch();

  function handlerCheckToDo (id : string){
    dispatch(toggleTodo(id))
  }
  function handlerDeleteToDo (id: string) {
    dispatch(removeTodo(id))
  }
  
  return (
    <div key={id} className={style.itemTodo}>
      <button onClick={() => handlerCheckToDo(id)} className={style.checkTodo}>{completed ? "✅" : "❌"}</button>
      <p className={`${completed ? style.textCompleted: style.incompleted}`}>{text}</p>
      <button onClick={() => handlerDeleteToDo(id)} className={style.deleteTodo}>🗑</button>
    </div>
  )
}

export default ToDoItem