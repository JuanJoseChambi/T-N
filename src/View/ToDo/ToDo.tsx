// import CreateToDo from "../../Components/CreateToDo/CreateToDo";
import ToDoList from "../../Components/ToDoList/ToDoList";
import SearchBar from "../../Components/SearchBar/SearchBar";
import style from "./ToDo.module.scss";

function ToDo() {
  return (
    <div className={style.viewToDo}>
      <div className={style.TodoList}>
        <h1 className={style.titleToDo}>To List</h1>
        <SearchBar/>
        <div>
          <ToDoList />

        </div>
        {/* <CreateToDo /> */}
      </div>
    </div>
  );
}

export default ToDo;
