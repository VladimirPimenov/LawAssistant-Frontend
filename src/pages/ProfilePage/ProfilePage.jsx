import "./ProfilePage.css"

import defaultAvatar from "../../assets/icons/profilepage/default_avatar.png"

const ProfilePage = ({lawyer, onUpdateLawyer}) => {
    return (
        <div className="profile-page">
            <div className="profile-container profile-data">
                <img className="profile-icon" src={defaultAvatar} alt="Профиль"/>
                <div className="profile-name-email">
                    <div className="profile-name">{lawyer.firstName} {lawyer.lastName}</div>
                    <div className="profile-email">{lawyer.email}</div>
                </div>
            </div>

            <div className="profile-container notifications-list">
                Уведомления
            </div>
        </div>
    )
}

export default ProfilePage