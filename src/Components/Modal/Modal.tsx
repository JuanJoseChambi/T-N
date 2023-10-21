import { modalProps } from "../../Interfaces/interfaces";
import style from "./Modal.module.scss";

function Modal({styles: propStyle = "", isVisible, isClosing, onClose, children }: modalProps) {
  if (!isVisible) {
    return null;
  }

  const modalStyles = propStyle || style.modal;
  
  if (isVisible) {
    document.body.style.overflowY = isVisible ? 'hidden' : 'auto'
  }

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
