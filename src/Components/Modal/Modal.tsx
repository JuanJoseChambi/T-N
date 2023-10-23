import { useEffect } from "react";
import { modalProps } from "../../Interfaces/interfaces";
import style from "./Modal.module.scss";

function Modal({ styles: propStyle = "", isVisible, isClosing, onClose, children }: modalProps) {
  useEffect(() => {
    // Función para calcular y establecer la posición del modal
    function setModalPosition() {
      if (isVisible) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const modal = document.querySelector(`.${style.modalComponent}`) as HTMLElement;
        if (modal) {
          modal.style.top = `${scrollTop}px`;
        }
      }
    }
    document.body.style.overflowY = isVisible ? 'hidden' : 'auto';
    // Calcular y establecer la posición del modal cuando cambia la visibilidad
    setModalPosition();
    // Agregar un evento de desplazamiento para actualizar la posición cuando se desplace la página
    window.addEventListener('scroll', setModalPosition);
    // Eliminar el evento de desplazamiento cuando el modal se cierre o desmonte
    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('scroll', setModalPosition);
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

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