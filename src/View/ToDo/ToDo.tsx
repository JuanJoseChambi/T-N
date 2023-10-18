// import CreateToDo from "../../Components/CreateToDo/CreateToDo";
import ToDoList from "../../Components/ToDoList/ToDoList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import style from "./ToDo.module.scss";
import ToDoListCompleted from "../../Components/ToDoListCompleted/ToDoListCompleted";
import Options from "../../Components/Options/Options";
import Tooltip from "../../Components/Tooltip/Tooltip";

function ToDo() {
  return (
    <div className={style.viewToDo}>
      <div className={style.TodoList}>
        <h1 className={style.titleToDo}>Lista de Tareas</h1>
        <SearchBar/>
        <div className={style.listToDos}>
          <Options/>
          <Tooltip text="Tareas">
            <ToDoList />
          </Tooltip>
          <ToDoListCompleted/>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
