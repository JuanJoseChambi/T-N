import { useEffect, useRef, useState } from "react";
import style from "./Options.module.scss";

function Options() {
    const divRef = useRef<HTMLDivElement | null>(null)
    const [divClicked, setDivClicked] = useState(false)
    useEffect(() => {
        function clickOutside (e: MouseEvent) {
            if (divRef.current && !divRef.current.contains(e.target as Node)) {
                setDivClicked(false)
            }
        }

        document.addEventListener("click", clickOutside)

        return () => {
            // Limpia el controlador de eventos cuando el componente se desmonta
            document.removeEventListener("click", clickOutside);
          };
    },[])

  return (
    <div className={`${style.optionsComponent} ${divClicked ? style.divActive : null}`} ref={divRef} >
        <button className={style.btn} onClick={() => setDivClicked(!divClicked)}><i className='bx bxs-chevrons-down'></i></button>
        Options
    </div>
  )
}

export default Options