import { useEffect } from "react";
import { modalProps } from "../../Interfaces/interfaces";
import style from "./Modal.module.scss";

function Modal({ isVisible, isClosing, onClose, children }: modalProps) {
  if (!isVisible) {
    return null;
  }
  useEffect(() => {
    
  
  }, [isVisible])

  return (
    <div className={`${style.modalComponent} ${isClosing ? style.notVisibleModal : null} ${isVisible ? style.visibleModal : null} `}>
      <button className={style.btnCloseModal} onClick={onClose}><i className='bx bx-x-circle'></i></button>
      <section className={style.modal}>
        {children}
      </section>
    </div>
  );
}

export default Modal;
