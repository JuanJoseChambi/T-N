import { Todo } from "../../Interfaces/interfaces"
import style from "./ToDoItem.module.scss";

function ToDoItem({id, text, completed } : Todo) {
  return (
    <div key={id} className={style.itemTodo}>
      <button className={style.checkTodo}>{completed ? "✔" : "❌"}</button>
      <p className={`${!!completed ? style.textCompleted: style.incompleted}`}>{text}</p>
    </div>
  )
}

export default ToDoItem