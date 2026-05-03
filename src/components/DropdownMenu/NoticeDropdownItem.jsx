import "./NoticeDropdownItem.css"

import { useState } from "react"

const NoticeDropdownItem = ({notification, onUpdateNotification}) => {
    const [isHovered, setHovered] = useState(false)

    const handleHover = (isHoverElement) => {
        setHovered(isHoverElement)
    }

    const markNotificationAsReaded = () => {
        let updatedNotification = {...notification, isReaded: true}
        onUpdateNotification(updatedNotification)
    }

    return (
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
    )
}

export default NoticeDropdownItem
