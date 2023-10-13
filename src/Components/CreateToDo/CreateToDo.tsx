import { useState, useRef } from "react";
import style from "./CreateToDo.module.scss";
import { Todo } from "../../Interfaces/interfaces";
import {useDispatch} from "react-redux"
import { addTodo } from "../../Redux/Actions/Actions";

function CreateToDo() {
  const [newTodo, setNewTodo] = useState<Todo>({
    id:"",
    text: "",
    completed:false
  })
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  function hashId () {
    const hash = (Math.random()*100).toString()
    return hash.toString()
  }


  function handlerSendTodo (e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
      
    if (newTodo.id && newTodo.text)  {
      console.log("Tiene Id");
      dispatch(addTodo(newTodo)) 
      if (inputRef.current) {
        inputRef.current.value = "";
      }
      setNewTodo({
        id:"",
        text: "",
        completed: false
      })
    }else{
      console.log("No tiene Id");
      
    }
  }

  function handlerPressKey (e : React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter") {
      if (newTodo.text) {
        dispatch(addTodo(newTodo)) 
        if (inputRef.current) {
          inputRef.current.value = "";
        }
        setNewTodo({
          id:"",
          text: "",
          completed: false
        })
      } 
    }  
  }

  return (
    <div className={style.viewCreateToDo}>
        <div className={style.containerForm}>
            <h3>Create To Do</h3>
            <form onSubmit={handlerSendTodo} className={style.form}>
                <textarea onKeyDown={handlerPressKey} onChange={(e) => setNewTodo({...newTodo,text:e.target.value, id: hashId()})} ref={inputRef}/>
                <button type="submit">Crear To Do</button>
            </form>
        </div>
    </div>
  )
}

export default CreateToDo