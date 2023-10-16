import { useEffect, useRef, useState } from "react";
import style from "./Options.module.scss";
import Modal from "../Modal/Modal";
import { useFade } from "../../Hooks/useFade";

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
    const {isVisible, isClosing, isOpen, onClose} = useFade()
  return (
    <div className={`${style.optionsComponent} ${divClicked ? style.divActive : null}`} ref={divRef} >
        <button className={style.btn} onClick={() => setDivClicked(!divClicked)}><i className='bx bxs-chevrons-down'></i></button>
        <button onClick={isOpen}>Create To Do</button>
        <button>Edit To Do</button>
        <Modal isVisible={isVisible} isClosing={isClosing} onClose={onClose}/>
    </div>
  )
}

export default Options