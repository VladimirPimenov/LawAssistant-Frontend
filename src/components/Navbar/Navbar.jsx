import "./Navbar.css"
import { Link, useNavigate } from "react-router";

import NavbarItem from "./NavbarItem";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import PageDropdownItem from "../DropdownMenu/PageDropdownItem";
import NoticeDropdownItem from "../DropdownMenu/NoticeDropdownItem";
import { useAuth } from "../../services/authContext";

const Navbar = ({notifications, onUpdateNotification}) => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const unreadNotifications = notifications?.filter(n => !n.isReaded)
    const lastNotifications = unreadNotifications?.slice(0, 3)

    let notificationsText = "Уведомления"

    if(unreadNotifications?.length > 0)
        notificationsText += ` (${unreadNotifications.length})`

    const handleLogout = async () => {
        await logout()
        navigate("/")
    }

    return (
        <header>
            <nav>
                <Link to="/">
                    <div className="logo">
                        LawAssistant
                    </div>
                </Link>
                <div className="navbar-options">
                    {user ? (
                        <>
                            <NavbarItem title={`${user.firstName} ${user.lastName}`}>
                                <DropdownMenu>
                                    <PageDropdownItem ref="/profile">Профиль</PageDropdownItem>
                                    <PageDropdownItem ref="/docs">Документы</PageDropdownItem>
                                    <PageDropdownItem ref="/reports">Отчёты</PageDropdownItem>
                                </DropdownMenu>
                            </NavbarItem>
                            <NavbarItem title={notificationsText}>
                                {(notifications != null && notifications.length != 0) 
                                    &&<DropdownMenu>
                                        {lastNotifications.map(notification => 
                                            <NoticeDropdownItem 
                                                key={notification.notificationId}
                                                notification={notification}
                                                onUpdateNotification={onUpdateNotification}
                                            />
                                        )}
                                    </DropdownMenu>
                                }
                            </NavbarItem>
                            <NavbarItem title={"Выйти"} onClick={handleLogout}/>
                            <Link to="/">
                                <NavbarItem title={"О продукте"}/>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <NavbarItem title={"Войти"}/>
                            </Link>
                            <Link to="/">
                                <NavbarItem title={"О продукте"}/>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar