import { useState } from "react";
import style from "./SearchBar.module.scss";
import { useDispatch } from "react-redux";
import { resetTodos, searchTodo } from "../../Redux/Actions/Actions";

function SearchBar() { 
    const [search, setSearch] = useState<string>(" ")
    
    const dispatch = useDispatch()

   
    function handlerSearch () {
      dispatch(searchTodo(search))
    }
    function handlerReset () {
      dispatch(resetTodos())
    }

  return (
    <div className={`${style.searchComponent}`}>
        <input className={style.input} type="text" placeholder="Buscar Tarea" onChange={(e) => setSearch(e.target.value)}/> 
        <label onClick={handlerSearch}>🔍</label>
        <button onClick={handlerReset}>Reset</button>
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