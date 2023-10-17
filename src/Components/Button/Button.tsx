import { btnsProps } from "../../Interfaces/interfaces";
import style from "./Button.module.scss";


function Button({children, onClick} : btnsProps) {
  return (
    <button className={style.btnComponent} onClick={onClick}>
        {children}
    </button>
  )
}

export default Button