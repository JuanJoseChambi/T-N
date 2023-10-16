import { useEffect } from "react";
import { PropsUseFade } from "../../Interfaces/interfaces";
import style from "./Modal.module.scss";

function Modal({ isVisible, isClosing, onClose }: PropsUseFade) {
  if (!isVisible) {
    return null;
  }

  useEffect(() => {
    console.log(isVisible, isClosing);
  }, []);

  return (
    <div
      className={`${style.modalComponent} ${isVisible ? style.visibleModal : null} ${isClosing ? style.notVisibleModal : null}`}>
      <button className={style.btnCloseModal} onClick={onClose}>
        x
      </button>
    </div>
  );
}

export default Modal;
