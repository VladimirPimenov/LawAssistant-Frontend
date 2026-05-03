import "./ProfilePage.css"

import defaultAvatar from "../../assets/icons/profilepage/default_avatar.png"
import NotificationsList from "../../components/NotificationsList/NotificationsList"

const ProfilePage = ({lawyer, lawyerNotifications, onUpdateLawyer, onRemoveNotification}) => {
    return (
        <div className="profile-page">
            <div className="profile-container profile-data">
                <img className="profile-icon" src={defaultAvatar} alt="Профиль"/>
                <div className="profile-name-email">
                    <div className="profile-name">{lawyer.firstName} {lawyer.lastName}</div>
                    <div className="profile-email">{lawyer.email}</div>
                </div>
            </div>

            <NotificationsList 
                notifications={lawyerNotifications} 
                onRemoveNotification={onRemoveNotification} 
            />
        </div>
    )
}

export default ProfilePage