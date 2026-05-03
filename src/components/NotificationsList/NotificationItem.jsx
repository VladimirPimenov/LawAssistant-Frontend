import "./NotificationItem.css"

import removeIcon from "../../assets/icons/items_container/remove.png"
import readedIcon from "../../assets/icons/profilepage/readed.png"

import LinkButton from "../LinkButton/LinkButton"

const NotificationItem = ({notification, onRemoveNotification}) => {
    return (
        <div className="notification-item">
            <div className="notification-info">
                <div className="date">{notification.date.replace('T', ' ')}</div>
                <div>{notification.text}</div>
            </div>
            <div className="notification-actions">
                {notification.isReaded && <img src={readedIcon} alt="Прочитано" title="Прочитано" />}
                <LinkButton 
                        icon={removeIcon} 
                        onClick={onRemoveNotification} 
                        id={notification.notificationId} 
                        title="Удалить уведомление"  
                    />
            </div>
            
        </div>
    )
}

export default NotificationItem