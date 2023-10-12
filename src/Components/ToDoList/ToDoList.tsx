import style from "./ToDoList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../Interfaces/interfaces";

function ToDoList() {
  const { todos } = useSelector((state: RootState) => state.todos)

  function loged () {
    console.log(todos);
    
  }
  

  return (
    <div className={style.viewToDoList}>
        <h1>To Do List</h1>
        <button onClick={loged}>state</button>
    </div>
  )
}

export default ToDoList