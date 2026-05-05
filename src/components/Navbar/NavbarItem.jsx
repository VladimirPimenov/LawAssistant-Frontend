import React, { useState } from "react";
import './NavbarItem.css'

import { Link } from "react-router";

const NavbarItem = (props) => {
    const [isMenuOpened, setMenuOpened] = useState(false)

    return (
        <div className="navbar-item" onClick={() => setMenuOpened(!isMenuOpened)}>
            {props.title}
            {isMenuOpened && props.children}
        </div>
    )
}

export default NavbarItem