import eldenRing from "./img/elden-ring.jpg"
import "animate.css"
import { useState } from "react"

export default function TitleScreenDom(props) {
    const {titleScreen, setTitleScreen} = props

    const [customClass, setCustomClass] = useState("titleScreen animate__animated animate__fadeIn")

    function handleClick() {
        setTimeout(function() {setTitleScreen(false)}, 800)
        setCustomClass("titleScreen animate__animated animate__fadeOut")
      }


    return (
        <div className='grandPapaDiv'>
          <img alt='Elden Ring Title Page' src={eldenRing} className={customClass}>
          </img>
          <button className='titleBtn' onClick={handleClick}>PLAY</button>
        </div>
        )
}

