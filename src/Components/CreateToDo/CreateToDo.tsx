import style from "./CreateToDo.module.scss";

function CreateToDo() {
  return (
    <div className={style.viewCreateToDo}>
        <div className={style.containerForm}>
            <h3>Create To Do List</h3>
            <form className={style.form}>
                <textarea />
                <button>Crear To Do</button>
            </form>
        </div>
    </div>
  )
}

export default CreateToDo