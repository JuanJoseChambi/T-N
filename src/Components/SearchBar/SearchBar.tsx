import { useEffect, useRef, useState } from "react";
import style from "./SearchBar.module.scss";
import { filterNotes, filterToDos, resetTodos, searchTodo } from "../../Redux/Actions/Actions";
import { useDispatch, useSelector} from "react-redux";
import { RootState } from "../../Interfaces/interfaces";
import OptionsAcordeon from "../OptionsAcordeon/OptionsAcordeon";

function SearchBar() { 
    const [search, setSearch] = useState<string>("")
    const { todos , todosBackup } = useSelector((state: RootState) => state.todos);
    const inputRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useDispatch()

    function handlerReset () {
        dispatch(resetTodos())        
      if (inputRef.current)inputRef.current.value = "";
      setSearch("")
    }

    useEffect(() => {
      function handlerSearch () {
        search ? dispatch(searchTodo(search)) : dispatch(resetTodos());
      }
      handlerSearch()
    },[search])



  return (
    <div className={style.searchComponentDiv}>
      <OptionsAcordeon icon="bx bx-filter">
        <button onClick={() => dispatch(filterToDos())}>filtrar Tareas</button>
        <button onClick={() => dispatch(filterNotes())}>filtrar Notas</button>
      </OptionsAcordeon>
      <div className={`${style.searchComponent}`}>
          <input className={style.input} type="text" placeholder="Buscar Tarea" onChange={(e) => setSearch(e.target.value)} ref={inputRef} /> 
          <label className={style.iconSearch} ><i className='bx bx-search-alt'></i></label>
      </div>
      <button className={style.btnReset} onClick={handlerReset}>{todos !== todosBackup ? <i className='bx bx-refresh' ></i>:  null}</button>
    </div>
  )
}

export default SearchBar






// const inputSearch = useRef<HTMLInputElement | null>(null)
    // const divSearch = useRef<HTMLDivElement | null>(null)
    // const [searchClick, setSearchClick] = useState(false)


     // useEffect(() => {
    //     const handleClickOutside = (event : MouseEvent) => {
    //         if (divSearch.current && !divSearch.current.contains(event.target as Node)) {
    //           // Si el clic ocurre fuera del div, establece divClicked en false
    //           setSearchClick(false);
    //         }
    //       };
    //       // Agrega un controlador de eventos al documento para detectar clics
    //       document.addEventListener("click", handleClickOutside);
      
    //       return () => {
    //         // Limpia el controlador de eventos cuando el componente se desmonta
    //         document.removeEventListener("click", handleClickOutside);
    //       };
    // },[])