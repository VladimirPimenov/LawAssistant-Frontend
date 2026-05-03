import axios from "axios"

const API_URL = "https://localhost:7286"
const NOTICE_API_URL = `${API_URL}/notification`

export const getLawyerNotifications = async (lawyerId) => {
    return axios
        .get(`${NOTICE_API_URL}/get-lawyer-notifications`, {params:{lawyerId}})
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const updateNotification = async (notification) => {
    return axios
        .put(`${NOTICE_API_URL}/update-notification`, notification)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const removeNotification = async (notificationId) => {
    return axios
        .delete(`${NOTICE_API_URL}/remove-notification`, {params:{notificationId}})
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}