import { useRef, useState  } from "react";
import style from "./Options.module.scss";
import Modal from "../Modal/Modal";
import { useFade } from "../../Hooks/useFade";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Actions/Actions";

function Options() {
    const [newToDo, setNewToDo] = useState({
        id:"",
        text: "",
        completed:false
    })
    const [errors, setErrors] = useState<string | null>(null)
    const divRef = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch();
    const {isVisible, isClosing, isOpen, onClose} = useFade()

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
            text: "",
            completed: false
          })
        }else{
          console.log("No tiene Id");
        }
      }

      function handlerSendNewToDo () {
        if (newToDo.text) {
          handlerSendTodo()
          onClose()
          setErrors(null)
        }else{
          setErrors("Escriba la Tarea")
        }
      }
  return (
    <>
        <div className={`${style.optionsComponent}`} ref={divRef} >
            <Button onClick={isOpen}>Create To Do</Button>
        </div>
        <Modal isVisible={isVisible} isClosing={isClosing} onClose={onClose}>
            <h2>Crear Tarea</h2>
            <p>{newToDo.text?"Presione Enter para Anadir Tarea":null}</p>
            <input type="text" placeholder="Tarea" onKeyDown={(e) => {e.key === "Enter" ? handlerSendNewToDo() : null}} onChange={(e) => setNewToDo({...newToDo, text:e.target.value, id: hashId()})}/>
            <Button onClick={handlerSendNewToDo}>Crear To Do</Button>
            <b>{!newToDo.text? errors: null}</b>
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