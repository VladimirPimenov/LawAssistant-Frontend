import api from "./api"

const REPORT_API_URL = `/reports`

export const getReport = async (reportId) => {
    return api
        .get(`${REPORT_API_URL}`, {params:{reportId}, withCredentials: true})
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const createReport = async (contractId) => {
    return api
        .post(`${REPORT_API_URL}`, null, {params:{contractId}, withCredentials: true})
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const removeReport = async (reportId) => {
    return api
        .delete(`${REPORT_API_URL}`, {params:{reportId}, withCredentials: true})
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}
