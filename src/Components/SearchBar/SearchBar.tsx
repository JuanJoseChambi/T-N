import { useEffect, useRef, useState } from "react";
import style from "./SearchBar.module.scss";
import { useDispatch } from "react-redux";
import { resetTodos, searchTodo } from "../../Redux/Actions/Actions";

function SearchBar() { 
    const [search, setSearch] = useState<string>("")
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
      <div className={`${style.searchComponent}`}>
          <input className={style.input} type="text" placeholder="Buscar Tarea" onChange={(e) => setSearch(e.target.value)} ref={inputRef} /> 
          <label className={style.iconSearch} ><i className='bx bx-search-alt'></i></label>
      </div>
      <button className={style.btnReset} onClick={handlerReset}>{search ? <i className='bx bx-refresh' ></i>:  null}</button>
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