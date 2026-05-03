import React from "react";
import {Link} from "react-router"

import "./PageDropdownItem.css"

const PageDropdownItem = (props) => {
    return (
        <Link to={props.ref == null ? "#" : props.ref}>
            <div className="page-dropdown-item">
                {props.children}
            </div>
        </Link>
    )
}

export default PageDropdownItem
