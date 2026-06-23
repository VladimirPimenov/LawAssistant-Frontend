import React, { useState } from "react";
import './NavbarItem.css'

import { Link } from "react-router";

const NavbarItem = ({ title, children, onClick }) => {
    const [isMenuOpened, setMenuOpened] = useState(false)

    const handleClick = () => {
        if (onClick) {
            onClick()
        } else {
            setMenuOpened(!isMenuOpened)
        }
    }

    return (
        <div className="navbar-item" onClick={handleClick}>
            {title}
            {isMenuOpened && children}
        </div>
    )
}

export default NavbarItem