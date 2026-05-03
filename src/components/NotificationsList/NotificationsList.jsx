import "./NotificationsList.css"
import NotificationItem from "./NotificationItem"

import { useState } from "react"

const NotificationsList = ({notifications, onRemoveNotification}) => {
    const [isOnlyUnreaded, setOnlyUnreaded] = useState(false)

    return (
        <div className="notifications-list">
            <div className="header">
                <div className="title">Уведомления</div>
                <div className="unreaded-checkbox">
                    <input 
                        type="checkbox" 
                        id="unreadedOption"
                        checked={isOnlyUnreaded}
                        onChange={e => setOnlyUnreaded(e.target.checked)}
                    />
                    <label htmlFor="unreadedOption" style={{marginLeft: 10}}>Только непрочитанные</label>
                </div>
            </div>

            {notifications == null 
                ? <div className="container-message">Ошибка при загрузке уведомлений!</div>
                : (notifications.length == 0
                    ? <div className="container-message">Уведомления не найдены</div>
                    : notifications.map(notification => 
                        (
                            (isOnlyUnreaded && !notification.isReaded)
                            || 
                            (!isOnlyUnreaded)
                        )
                        &&  
                        <NotificationItem 
                            notification={notification}
                            key={notification.notificationId}
                            onRemoveNotification={onRemoveNotification}
                        />
                    )
                )
            }     
        
        </div>
    )
}

export default NotificationsList