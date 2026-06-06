import axios from "axios"

const API_URL = "https://localhost:7286"
const NOTICE_API_URL = `${API_URL}/notifications`

export const updateNotification = async (notification) => {
    return axios
        .put(`${NOTICE_API_URL}`, notification)
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
        .delete(`${NOTICE_API_URL}`, {params:{notificationId}})
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}