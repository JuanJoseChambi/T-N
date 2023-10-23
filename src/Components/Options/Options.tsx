import { useRef, useState  } from "react";
import style from "./Options.module.scss";
import Modal from "../Modal/Modal";
// import { useFade } from "../../Hooks/useFade";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Actions/Actions";
import { Todo } from "../../Interfaces/interfaces";
import DatePicker, { registerLocale } from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import es from "date-fns/locale/es";
registerLocale("es", es)

function Options() {
    const [newToDo, setNewToDo] = useState<Todo>({
        id:"",
        title:"",
        text: "",
        completed:false,
        date: new Date()
    })
    const [errors, setErrors] = useState<string | null>(null)
    const divRef = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch();
    const [isVisibleCreateTodo, setIsVisibleCreateTodo] = useState(false)
    const [isVisibleCreateNote, setIsVisibleCreateNote] = useState(false)

      function hashId () {
        const hash = (Math.random()*100).toString()
        return hash.toString()
      }

      function handlerSendTodo () { 
        if (newToDo.id && newToDo.text)  {
          // console.log("Tiene Id");
          dispatch(addTodo(newToDo)) 
          setIsVisibleCreateNote(false)
          setIsVisibleCreateTodo(false)
          setErrors(null)
          setNewToDo({
            id:"",
            title:"",
            text: "",
            completed: false,
            date: new Date()
          })
        }
      }
      

        document.body.style.overflowY = isVisibleCreateNote || isVisibleCreateTodo? 'hidden' : 'auto'

  return (
    <>
        <div className={`${style.optionsComponent}`} ref={divRef} >
            <Button onClick={() => setIsVisibleCreateTodo(true)}>Crear Tarea</Button>
            <Button onClick={() => setIsVisibleCreateNote(true)}>Crear Nota</Button>
        </div>
        <Modal isVisible={isVisibleCreateTodo} isClosing={!isVisibleCreateTodo} onClose={() => setIsVisibleCreateTodo(false)}>
            <h2>Crear Tarea</h2>
            <p>{newToDo.text?"Presione Enter para Anadir Tarea":null}</p>
            <input type="text" placeholder="Tarea" onKeyDown={(e) => {e.key === "Enter" ? handlerSendTodo() : null}} onChange={(e) => setNewToDo({...newToDo, text:e.target.value, id: hashId()})}/>
            <DatePicker wrapperClassName={style.calendario} showTimeSelect={true} dateFormat={"dd-MM-yyyy"} locale={"es"} className={style.calendario} selected={newToDo.date ? new Date(newToDo.date) : null} onChange={(date: Date | null ) => setNewToDo({ ...newToDo, date })}/>
            <Button onClick={handlerSendTodo}>Crear Tarea</Button>
            <b>{!newToDo.text? errors: null}</b>
        </Modal>
        <Modal isVisible={isVisibleCreateNote} isClosing={!isVisibleCreateNote} onClose={() => setIsVisibleCreateNote(false)}>
          <h2>Crear Nota</h2>
          <input type="text" placeholder="Titulo" onKeyDown={(e) => {e.key === "Enter" ? handlerSendTodo() : null}} onChange={(e) => setNewToDo({...newToDo, title: e.target.value, id: hashId()})}/>
          <textarea placeholder="Nota" onChange={(e) => setNewToDo({...newToDo, text: e.target.value})}></textarea>
          <DatePicker wrapperClassName={style.calendario} showTimeSelect={true} dateFormat={"dd-MM-yyyy"} locale={"es"} className={style.calendario} selected={newToDo.date ? new Date(newToDo.date) : null} onChange={(date: Date | null ) => setNewToDo({ ...newToDo, date })}/>
          <Button onClick={handlerSendTodo}>Crear Nota</Button>
        </Modal>
    </>
  )
}

export default Options
















{/* <button className={style.btn} onClick={() => setDivClicked(!divClicked)}><i className='bx bxs-chevrons-down'></i></button> */}



  // const [divClicked, setDivClicked] = useState(false)
    // useEffect(() => {
    //     function clickOutside (e: MouseEvent) {
    //         if (divRef.current && !divRef.current.contains(e.target as Node)) {
    //             setDivClicked(false)
    //         }
    //     }
    //     document.addEventListener("click", clickOutside)
    //     return () => {
    //         document.removeEventListener("click", clickOutside);
    //       };
    // },[])