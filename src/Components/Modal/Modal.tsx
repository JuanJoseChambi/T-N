import { useEffect } from "react";
import { modalProps } from "../../Interfaces/interfaces";
import style from "./Modal.module.scss";

function Modal({styles: propStyle = "", isVisible, isClosing, onClose, children }: modalProps) {
  if (!isVisible) {
    return null;
  }
  useEffect(() => {
  }, [isVisible]);

  const modalStyles = propStyle || style.modal;
  

  return (
    <div className={`${style.modalComponent} ${isClosing ? style.notVisibleModal : null} ${isVisible ? style.visibleModal : null} `}>
      <section className={`${modalStyles} ${style.notStyle}`}>
        <button className={style.btnCloseModal} onClick={onClose}><i className='bx bx-x-circle'></i></button>
        {children}
      </section>
    </div>
  );
}

export default Modal;
