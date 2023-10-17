import { useEffect, useRef, useState } from "react";
import style from "./SearchBar.module.scss";

function SearchBar() {
    const inputSearch = useRef<HTMLInputElement | null>(null)
    const divSearch = useRef<HTMLDivElement | null>(null)
    const [searchClick, setSearchClick] = useState(false)

    useEffect(() => {
        const handleClickOutside = (event : MouseEvent) => {
            if (divSearch.current && !divSearch.current.contains(event.target as Node)) {
              // Si el clic ocurre fuera del div, establece divClicked en false
              setSearchClick(false);
            }
          };
          // Agrega un controlador de eventos al documento para detectar clics
          document.addEventListener("click", handleClickOutside);
      
          return () => {
            // Limpia el controlador de eventos cuando el componente se desmonta
            document.removeEventListener("click", handleClickOutside);
          };
    },[])

  return (
    <div className={`${style.searchComponent} ${searchClick? style.divClicked:null}`} onClick={() => setSearchClick(!searchClick)} ref={divSearch}>
        <input className={style.input} type="text" placeholder="Buscar Tarea" ref={inputSearch}/> 
        <label>🔍</label>
    </div>
  )
}

export default SearchBar