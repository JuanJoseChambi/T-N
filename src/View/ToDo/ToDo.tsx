import CreateToDo from "../../Components/CreateToDo/CreateToDo"
import ToDoList from "../../Components/ToDoList/ToDoList"
import style from "./ToDo.module.scss"

function ToDo() {
  return (
    <div className={style.viewToDo}>
        <CreateToDo/>
        <ToDoList/>
    </div>
  )
}

export default ToDo