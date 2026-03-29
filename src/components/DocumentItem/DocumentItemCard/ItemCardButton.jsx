import { useState } from "react"
import activeButtonIcon from "../../../assets/icons/doc-panel-button-active.png"
import deactiveButtonIcon from "../../../assets/icons/doc-panel-button-deactive.png"

import "./ItemCardButton.css"

const ItemCardButton = ({isPanelOpened, onClick}) => {
    const buttonClick = () => {
        setIcon(isPanelOpened ? deactiveButtonIcon : activeButtonIcon)
        onClick()
    }

    const [icon, setIcon] = useState(deactiveButtonIcon)
        
    return (
        <div className="panel-button">
            <img src={icon} onClick={buttonClick}></img>
        </div>
    )
}

export default ItemCardButton