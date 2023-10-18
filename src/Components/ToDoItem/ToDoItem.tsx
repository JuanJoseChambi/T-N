import { useDispatch } from "react-redux";
import { Todo } from "../../Interfaces/interfaces"
import style from "./ToDoItem.module.scss";
import { removeTodo, toggleTodo } from "../../Redux/Actions/Actions";
import { useRef } from "react";
import useFadeOnScroll from "../../Hooks/useFadeOnScroll";
import { useFade } from "../../Hooks/useFade";
// import { useEffect } from "react";

function ToDoItem({id, text, completed } : Todo) {
  const ToDos = useRef<HTMLDivElement | null>(null)
  const dispatch = useDispatch();

  function handlerCheckToDo (id : string){
    dispatch(toggleTodo(id))
  }

  useFadeOnScroll(ToDos, style.visibleToDos)

  const { onClose, isClosing } = useFade()

  function handlerDeleteToDo (id: string) {
    onClose()
    dispatch(removeTodo(id))
  }
  return (
    <div key={id} className={`${style.itemTodo} ${isClosing? style.notVisibleItem : null}`} ref={ToDos}>
      <button onClick={() => handlerCheckToDo(id)} className={style.checkTodo}> {completed ? <i className='bx bx-checkbox-checked' ></i> : <i className='bx bx-checkbox'></i>}</button>
      <div className={style.containerText}>
        <p className={`${completed ? style.textCompleted: style.incompleted}`}>{text}</p>
      </div>
      <button onClick={() => handlerDeleteToDo(id)} className={style.deleteTodo}>🗑</button>
    </div>
  )
}

export default ToDoItem