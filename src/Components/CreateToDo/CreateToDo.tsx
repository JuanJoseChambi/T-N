import { useEffect, useState, useRef } from "react";
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
  const inputRef = useRef(null)

  function hashId () {
    const hash = (Math.random()*100).toString()
    return hash.toString()
  }


  function handlerSendTodo (e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
      
    if (newTodo.id)  {
      console.log("Tiene Id");
      dispatch(addTodo(newTodo)) 
      inputRef.current.value = ""
      setNewTodo({
        id:"",
        text: "",
        completed: false
      })
    }else{
      console.log("No tiene Id");
      
    }
  }
  useEffect(() => {
    
  }, [newTodo]);

  return (
    <div className={style.viewCreateToDo}>
        <div className={style.containerForm}>
            <h3>Create To Do</h3>
            <form onSubmit={handlerSendTodo} className={style.form}>
                <textarea onChange={(e) => setNewTodo({...newTodo,text:e.target.value, id: hashId()})} ref={inputRef}/>
                <button type="submit">Crear To Do</button>
            </form>
        </div>
    </div>
  )
}

export default CreateToDo