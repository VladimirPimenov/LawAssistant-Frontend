import axios from "axios"

const API_URL = "https://localhost:7286"
const REPORT_API_URL = `${API_URL}/report`

export const getReport = async (reportId) => {
    return axios
        .get(`${REPORT_API_URL}/get-report`, {params:{reportId}})
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
        .get(`${REPORT_API_URL}/get-lawyer-reports`, {params:{lawyerId}})
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const createReport = async (contractId) => {
    return axios
        .post(`${REPORT_API_URL}/create-report`, null, {params:{contractId}})
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const removeReport = async (reportId) => {
    return axios
        .delete(`${REPORT_API_URL}/remove-report`, {params:{reportId}})
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}