import api from "./api"

const ACCOUNT_API_URL = "/accounts"

export const getAccountNotifications = async (accountId) => {
    return api
        .get(`${ACCOUNT_API_URL}/${accountId}/notifications`, { withCredentials: true })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}