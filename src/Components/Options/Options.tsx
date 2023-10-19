import { useRef, useState  } from "react";
import style from "./Options.module.scss";
import Modal from "../Modal/Modal";
import { useFade } from "../../Hooks/useFade";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Actions/Actions";
import DatePicker, { registerLocale } from "react-datepicker"; // Importa react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Importa el estilo CSS de react-datepicker
import { Todo } from "../../Interfaces/interfaces";
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

    function handlerOpenCreateTodo () {setIsVisibleCreateTodo(true)}
    function handlerCloseCreateTodo () {setIsVisibleCreateTodo(false)}
    
    function handlerOpenCreateNote () {setIsVisibleCreateNote(true)}
    function handlerCloseCreateNote () {setIsVisibleCreateNote(false)}
    // const {isVisible, isClosing, isOpen, onClose} = useFade()

      function hashId () {
        const hash = (Math.random()*100).toString()
        return hash.toString()
      }

      function handlerSendTodo () { 
        if (newToDo.id && newToDo.text)  {
          console.log("Tiene Id");
          dispatch(addTodo(newToDo)) 
        setNewToDo({
            id:"",
            title:"",
            text: "",
            completed: false,
            date: new Date()
          })
        }else{
          console.log("No tiene Id");
        }
      }

      function handlerSendNewToDo () {
        if (newToDo.text) {
          handlerSendTodo()
          // onClose()
          setErrors(null)
        }else{
          setErrors("Escriba la Tarea")
        }
      }
  return (
    <>
        <div className={`${style.optionsComponent}`} ref={divRef} >
            <Button onClick={handlerOpenCreateTodo}>Crear Tarea</Button>
            <Button onClick={handlerOpenCreateNote}>Crear Nota</Button>
        </div>
        <Modal isVisible={isVisibleCreateTodo} isClosing={!isVisibleCreateTodo} onClose={handlerCloseCreateTodo}>
            <h2>Crear Tarea</h2>
            <p>{newToDo.text?"Presione Enter para Anadir Tarea":null}</p>
            <input type="text" placeholder="Tarea" onKeyDown={(e) => {e.key === "Enter" ? handlerSendNewToDo() : null}} onChange={(e) => setNewToDo({...newToDo, text:e.target.value, id: hashId()})}/>
            <DatePicker wrapperClassName={style.calendario} showTimeSelect={true} dateFormat={"dd-MM-yyyy"} locale={"es"} className={style.calendario} selected={newToDo.date ? new Date(newToDo.date) : null} onChange={(date: Date | null ) => setNewToDo({ ...newToDo, date })}/>
            <Button onClick={handlerSendNewToDo}>Crear Tarea</Button>
            <b>{!newToDo.text? errors: null}</b>
        </Modal>
        <Modal isVisible={isVisibleCreateNote} isClosing={!isVisibleCreateNote} onClose={handlerCloseCreateNote}>
          <h2>Crear Nota</h2>
          <input type="text" placeholder="Titulo"/>
          <textarea placeholder="Texto de la Nota"></textarea>
          <Button onClick={handlerCloseCreateNote}>Crear Nota</Button>
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