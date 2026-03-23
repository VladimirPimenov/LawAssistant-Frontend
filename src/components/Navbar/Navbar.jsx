import React from "react";
import "./Navbar.css"
import NavbarItem from "./NavbarItem";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import DropdownItem from "../DropdownMenu/DropdownItem";

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="logo">
                    LawAssistant
                </div>

                <div className="navbar-options">
                    <NavbarItem title={"Личный кабинет"}>
                        <DropdownMenu>
                            <DropdownItem ref="/profile">Профиль</DropdownItem>
                            <DropdownItem ref="/docs">Документы</DropdownItem>
                            <DropdownItem ref="/reports">Отчёты</DropdownItem>
                        </DropdownMenu>
                    </NavbarItem>
                    <NavbarItem title={"Уведомления"}/>
                    <NavbarItem title={"О продукте"}/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar