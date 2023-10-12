import { useDispatch } from "react-redux";
import { Todo } from "../../Interfaces/interfaces"
import style from "./ToDoItem.module.scss";
import { toggleTodo } from "../../Redux/Actions/Actions";
import { useEffect } from "react";

function ToDoItem({id, text, completed } : Todo) {
  const dispatch = useDispatch();

  function handlerCheckToDo (id : string){
    dispatch(toggleTodo(id))
  }
  useEffect(() => {
    console.log(id);
    
  }, [id])
  
  return (
    <div key={id} className={style.itemTodo}>
      <button onClick={() => handlerCheckToDo(id)} className={style.checkTodo}>{completed ? "✅" : "❌"}</button>
      <p className={`${completed ? style.textCompleted: style.incompleted}`}>{text}</p>
    </div>
  )
}

export default ToDoItem