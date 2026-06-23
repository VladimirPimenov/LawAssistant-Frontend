import api from "./api"

const NOTICE_API_URL = "/notifications"

export const updateNotification = async (notification) => {
    return api
        .put(`${NOTICE_API_URL}`, notification, { withCredentials: true })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const removeNotification = async (notificationId) => {
    return api
        .delete(`${NOTICE_API_URL}`, {params:{notificationId}, withCredentials: true})
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}
