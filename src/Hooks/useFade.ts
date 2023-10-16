import { useState } from "react"
import { useFadeType } from "../Interfaces/interfaces";

export function useFade (): useFadeType {
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