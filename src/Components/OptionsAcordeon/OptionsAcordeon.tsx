import { useState } from "react"
import { OptionsAcordeonProps } from "../../Interfaces/interfaces"
import style from "./OptionsAcordeon.module.scss"

function OptionsAcordeon({children, icon} : OptionsAcordeonProps) {
    const [openOptions, setOpenOptions] = useState(false)



  return (
    <div className={style.optionsAcordeonComponent}>  
        <i onClick={() => setOpenOptions(!openOptions)} className={`${icon} ${style.icon}`}></i>
        {/* {openOptions ? */}
        <div className={`${style.options} ${openOptions? style.optionsVisible: null}`} onMouseLeave={() => setOpenOptions(false)}>
            <i className='bx bx-up-arrow'></i>
            {children}
        </div> 
        {/* :null } */}
    </div>
  )
}

export default OptionsAcordeon