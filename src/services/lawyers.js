import axios from "axios"

const API_URL = "https://localhost:7286"
const LAWYER_API_URL = `${API_URL}/lawyers`

export const getLawyersList = async () => {
    return axios
        .get(`${LAWYER_API_URL}`)
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const getLawyerContracts = async (lawyerId) => {
    return axios
        .get(`${LAWYER_API_URL}/${lawyerId}/contracts`)
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const getLawyerReports = async (lawyerId) => {
    return axios
        .get(`${LAWYER_API_URL}/${lawyerId}/reports`)
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const getLawyerNotifications = async (lawyerId) => {
    return axios
        .get(`${LAWYER_API_URL}/${lawyerId}/notifications`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}