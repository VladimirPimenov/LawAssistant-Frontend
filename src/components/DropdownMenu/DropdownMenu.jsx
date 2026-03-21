import React from "react";
import './DropdownMenu.css'

const DropdownMenu = (props) => {
    return (
        <div className="dropdown">
            {props.children}
        </div>
    );

}

export default DropdownMenu