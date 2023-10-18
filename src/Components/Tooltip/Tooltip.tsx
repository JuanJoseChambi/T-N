import { useState } from 'react';
import { TooltipProp } from '../../Interfaces/interfaces';
import style from "./Tooltip.module.scss";

function Tooltip ({children, text}: TooltipProp) {
    const [showTooltip, setShowTooltip] = useState(false)

    const handleMouseEnter = () => {
        setShowTooltip(true);
      };
    
      const handleMouseLeave = () => {
        setShowTooltip(false);
      };

  return (
    <div className={style.tooltipComponent} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        {children}
        <div className={`${style.tooltip} ${showTooltip?style.visibleTooltip: null}`}>{text} <i className='bx bx-right-arrow' ></i> </div> 
    </div>
  )
}

export default Tooltip