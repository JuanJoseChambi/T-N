import { useDispatch } from "react-redux";
import { Todo } from "../../Interfaces/interfaces"
import style from "./ToDoItem.module.scss";
import { removeTodo, toggleTodo, upDateNoteTodo } from "../../Redux/Actions/Actions";
import { useRef, useState } from "react";
import useFadeOnScroll from "../../Hooks/useFadeOnScroll";
import { useFade } from "../../Hooks/useFade";
import Modal from "../Modal/Modal";
import { useDate } from "../../Hooks/useDate";
import Button from "../Button/Button";
import DatePicker, { registerLocale } from "react-datepicker"; // Importa react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Importa el estilo CSS de react-datepicker
import es from "date-fns/locale/es";
registerLocale("es", es)

function ToDoItem({id, title, text, completed, date } : Todo) {

  const [upDate, setUpDate] = useState<Todo>({
    id:id,
    title:"",
    text:"",
    completed:completed,
    date:date
  })

let fecha;
let hora;
if (date) {
  const { dia, mes, horaCompleta} = useDate(date)
  fecha = `${dia}/${mes}`;
  hora = horaCompleta
}  

  const ToDos = useRef<HTMLDivElement | null>(null)
  const dispatch = useDispatch();
  const {isClosing, isVisible ,isOpen ,onClose } = useFade()
  useFadeOnScroll(ToDos, style.visibleToDos)

  function handlerCheckToDo (id : string): void{
    dispatch(toggleTodo(id))
  }

  function handlerDeleteToDo (id: string): void {
    onClose()
    dispatch(removeTodo(id))
  }

  function handlerUpDate () {
    dispatch(upDateNoteTodo(upDate))
    onClose()
  }

  return ( 
    <>
        <div key={id} className={`${style.itemTodo}`} onClick={isOpen} ref={ToDos}>
          <button onClick={() => handlerCheckToDo(id)} className={style.checkTodo}> {completed ? <i className='bx bx-checkbox-checked' ></i> : <i className='bx bx-checkbox'></i>}</button>
          <div className={style.containerText}>
            {title ? <h3 className={style.titleNote}>{title}</h3>:null}
            <p className={`${completed ? style.textCompleted: style.incompleted}`}>{text}</p>
          </div>
          <div className={style.date}>{fecha}</div>
          <button onClick={() => handlerDeleteToDo(id)} className={style.deleteTodo}>🗑</button>
        </div>
      <Modal styles={title ? style.noteEdit : style.todoEdit} isVisible={isVisible} isClosing={isClosing} onClose={onClose}>
        <h2>Editar {title? "Nota" : "Tarea"}</h2>
        <div className={style.containerInputs}>
          <input type="text" placeholder={title ? title : text} onChange={(e) => {title ? setUpDate({...upDate, title: e.target.value}): setUpDate({...upDate, text:e.target.value})}}/>
          {title ? <textarea onChange={(e) => setUpDate({...upDate, text:e.target.value})}>{text}</textarea> : null}
        </div>
        <div className={style.date}>
          <DatePicker popperPlacement="right" wrapperClassName={style.calendario} showTimeSelect={true} dateFormat={"dd-MM-yyyy"} locale={"es"} className={style.calendario} selected={upDate.date ? new Date(upDate.date) : null} onChange={(date: Date | null ) => setUpDate({ ...upDate, date })}/>
        </div>
        <Button onClick={handlerUpDate}>Editar Tarea</Button>
      </Modal>  
    </>
    
  )
}

export default ToDoItem