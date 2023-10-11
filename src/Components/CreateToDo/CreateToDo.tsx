import { useState } from "react";
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
  function handlerSendTodo (e : React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addTodo(newTodo))
    console.log(newTodo);
    
  }

  return (
    <div className={style.viewCreateToDo}>
        <div className={style.containerForm}>
            <h3>Create To Do</h3>
            <form onSubmit={handlerSendTodo} className={style.form}>
                <textarea onChange={(e) => setNewTodo({...newTodo,text:e.target.value})}/>
                <button type="submit">Crear To Do</button>
            </form>
        </div>
    </div>
  )
}

export default CreateToDo