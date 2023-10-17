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
    const divRef = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch();
    const {isVisible, isClosing, isOpen, onClose} = useFade()

    function hashId () {
        const hash = (Math.random()*100).toString()
        return hash.toString()
      }

      function handlerSendTodo () { /*e : React.FormEvent<HTMLFormElement>*/
        // e.preventDefault();
          
        if (newToDo.id && newToDo.text)  {
          console.log("Tiene Id");
          dispatch(addTodo(newToDo)) 
        //   if (inputRef.current) {
            // inputRef.current.value = "";
        //   }
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
        handlerSendTodo()
        onClose()
      }
  return (
    <>
        <div className={`${style.optionsComponent}`} ref={divRef} >
            <Button onClick={isOpen}>Create To Do</Button>
        </div>
        <Modal isVisible={isVisible} isClosing={isClosing} onClose={onClose}>
            <h2>Create To Do</h2>
            <p>Create To Do</p>
            <input type="text" placeholder="To Do" onChange={(e) => setNewToDo({...newToDo, text:e.target.value, id: hashId()})}/>
            {/* <textarea></textarea> */}
            <Button onClick={handlerSendNewToDo}>Crear To Do</Button>
              
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