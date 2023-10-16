import { useEffect } from "react";
import { PropsUseFade } from "../../Interfaces/interfaces";
import style from "./Modal.module.scss";

function Modal({isVisible, isClosing, onClose}: PropsUseFade) {
if (!isVisible && !isClosing) {
    return null
}

    useEffect(() => {
        console.log(isVisible , isClosing);
        
    },[])

  return (
    <div className={`${style.modalComponent} ${isVisible? style.visible : null} ${isClosing ? style.notVisible: null}`}>
        <button onClick={onClose}>x</button>
    </div>
  )
}

export default Modal