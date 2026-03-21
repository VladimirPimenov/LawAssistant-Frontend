import React from "react";
import {Link} from "react-router"
import "./DropdownItem.css"

const DropdownItem = (props) => {
    return (
        <div className="dropdown-item">
            <Link to={props.ref == null ? "#" : props.ref}>{props.children}</Link>
        </div>
    )
}

export default DropdownItem
