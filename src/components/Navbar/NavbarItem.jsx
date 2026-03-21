import React, { useState } from "react";
import './NavbarItem.css'

const NavbarItem = (props) => {
    const [isMenuOpened, setMenuOpened] = useState(false)

    return (
        <div className="navbar-item" onClick={() => setMenuOpened(!isMenuOpened)}>
            <a href = {props.ref == null ? "#" : props.ref}>{props.title}</a>
            {isMenuOpened && props.children}
        </div>

    )
}

export default NavbarItem