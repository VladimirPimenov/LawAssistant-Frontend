import axios from "axios"

const API_URL = "https://localhost:7286"
const CONTRACT_API_URL = `${API_URL}/contract`

export const getContract = async (contractId) => {
    return axios
        .get(`${CONTRACT_API_URL}/get-contract`, {params: {contractId}})
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
        .get(`${CONTRACT_API_URL}/get-lawyer-contracts`, {params:{lawyerId}})
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const updateContract = async (contract) => {
    return axios
        .put(`${CONTRACT_API_URL}/update-contract`, contract)
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const removeContract = async (contractId) => {
    return axios
        .delete(`${CONTRACT_API_URL}/delete-contract`, {params: {contractId}} )
        .then(responce => {
            return responce.data
        })
        .catch(error => {  
            console.log(error)
            return null
        })
}