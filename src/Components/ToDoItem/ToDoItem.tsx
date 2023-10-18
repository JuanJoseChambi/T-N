import { useDispatch } from "react-redux";
import { Todo } from "../../Interfaces/interfaces"
import style from "./ToDoItem.module.scss";
import { removeTodo, toggleTodo } from "../../Redux/Actions/Actions";
import { useRef } from "react";
import useFadeOnScroll from "../../Hooks/useFadeOnScroll";
import { useFade } from "../../Hooks/useFade";
import Modal from "../Modal/Modal";
import { useDate } from "../../Hooks/useDate";
// import { useEffect } from "react";

function ToDoItem({id, text, completed, date } : Todo) {

let fecha;
let hora;
if (date) {
  const {fechaCompleta, horaCompleta} = useDate(date)
  fecha = fechaCompleta;
  hora = horaCompleta
}  

  const ToDos = useRef<HTMLDivElement | null>(null)
  const dispatch = useDispatch();

  function handlerCheckToDo (id : string){
    dispatch(toggleTodo(id))
  }

  useFadeOnScroll(ToDos, style.visibleToDos)

  const {isClosing, isVisible ,isOpen ,onClose } = useFade()

  function handlerDeleteToDo (id: string) {
    onClose()
    dispatch(removeTodo(id))
  }
  return (
    <>
      <div key={id} className={`${style.itemTodo}`} onClick={isOpen} ref={ToDos}>
        <button onClick={() => handlerCheckToDo(id)} className={style.checkTodo}> {completed ? <i className='bx bx-checkbox-checked' ></i> : <i className='bx bx-checkbox'></i>}</button>
        <div className={style.containerText}>
          <p className={`${completed ? style.textCompleted: style.incompleted}`}>{text}</p>
        </div>
        <p>{fecha}</p>
        <p>{hora}</p>
        <button onClick={() => handlerDeleteToDo(id)} className={style.deleteTodo}>🗑</button>
      </div>
      <Modal isVisible={isVisible} isClosing={isClosing} onClose={onClose}>
        <h2>Editar Tarea</h2>
      </Modal>  
    </>
    
  )
}

export default ToDoItem