import { useState } from "react"
import { PropsUseFade } from "../Interfaces/interfaces";

export function useFade (): PropsUseFade {
    const [isVisible, setIsVisible] = useState(false)
    const [isClosing, setIsClosing] = useState(false)

    function isOpen () {
        setIsVisible(true);
        setIsClosing(false)
    }
    function onClose () {
        setIsClosing(true)
        setTimeout(() => {
            setIsVisible(false);
            setIsClosing(false);
          }, 300);
    }


    return {isOpen, onClose, isVisible, isClosing}
}