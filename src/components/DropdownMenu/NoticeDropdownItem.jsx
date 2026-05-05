import "./NoticeDropdownItem.css"

import { useState } from "react"
import { Link } from "react-router"

const NoticeDropdownItem = ({notification, onUpdateNotification, ref}) => {
    const [isHovered, setHovered] = useState(false)

    const handleHover = (isHoverElement) => {
        setHovered(isHoverElement)
    }

    const markNotificationAsReaded = () => {
        let updatedNotification = {...notification, isReaded: true}
        onUpdateNotification(updatedNotification)
    }

    return (
        <Link to={ref == null ? "#" : ref}>
            <div className="notice-dropdown-item" 
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
            >
                <div>
                    {notification.text.length > 30
                        ? notification.text.slice(0, 30) + "..."
                        : notification.text
                    }
                </div>
                {isHovered 
                && <div className="check-notice" onClick={() => markNotificationAsReaded()}>Пометить прочитанным</div>
                }
                
            </div>
        </Link>
    )
}

export default NoticeDropdownItem
