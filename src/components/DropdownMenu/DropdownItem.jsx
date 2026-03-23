import React from "react";
import {Link} from "react-router"
import "./DropdownItem.css"

const DropdownItem = (props) => {
    return (
        <Link to={props.ref == null ? "#" : props.ref}>
            <div className="dropdown-item">
                {props.children}
            </div>
        </Link>
    )
}

export default DropdownItem
