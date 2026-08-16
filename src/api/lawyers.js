import api from "./api"

const LAWYER_API_URL = `/lawyers`

export const getLawyersList = async () => {
    return api
        .get(`${LAWYER_API_URL}`, { withCredentials: true })
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const getLawyerContracts = async (lawyerId) => {
    return api
        .get(`${LAWYER_API_URL}/${lawyerId}/contracts`, { withCredentials: true })
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const getLawyerReports = async (lawyerId) => {
    return api
        .get(`${LAWYER_API_URL}/${lawyerId}/reports`, { withCredentials: true })
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}