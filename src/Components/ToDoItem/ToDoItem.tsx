import { useDispatch } from "react-redux";
import { Todo } from "../../Interfaces/interfaces"
import style from "./ToDoItem.module.scss";
import { removeTodo, toggleTodo } from "../../Redux/Actions/Actions";
import { useEffect } from "react";

function ToDoItem({id, text, completed } : Todo) {
  const dispatch = useDispatch();

  function handlerCheckToDo (id : string){
    dispatch(toggleTodo(id))
  }
  function handlerDeleteToDo (id: string) {
    dispatch(removeTodo(id))
  }
  useEffect(() => {
    console.log(text);
    
  },[text])
  
  return (
    <div key={id} className={style.itemTodo}>
      <button onClick={() => handlerCheckToDo(id)} className={style.checkTodo}>{completed ? "✅" : "❌"}</button>
      <div className={style.containerText}>
        <p className={`${completed ? style.textCompleted: style.incompleted}`}>{text}</p>
      </div>
      <button onClick={() => handlerDeleteToDo(id)} className={style.deleteTodo}>🗑</button>
    </div>
  )
}

export default ToDoItem