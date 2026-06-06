import axios from "axios"

const API_URL = "https://localhost:7286"
const CONTRACT_API_URL = `${API_URL}/contracts`

export const getContract = async (contractId) => {
    return axios
        .get(`${CONTRACT_API_URL}`, {params: {contractId}})
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const getContractFile = async (contractId) => {
    return axios
        .get(`${CONTRACT_API_URL}/${contractId}/file`, {responseType: 'blob'})
        .then(response => {
            const file = new File(
                [response.data], 
                `contract-${contractId}.docx`, 
                {type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"}
            )
            return file
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const createContract = async (contract) => {
    const contractRequest = new FormData()
    contractRequest.append('title', contract.title)
    contract.authorsId.forEach(id => {
        contractRequest.append('authorsId', id.toString())
    })
    contractRequest.append('contractFile', contract.contractFile)

    return axios
        .post(`${CONTRACT_API_URL}`, contractRequest, 
                { headers: { "Content-Type": "multipart/form-data" }})
        .then(response => {
            return response.data
        })
        return null
}

export const updateContract = async (contract) => {
    return axios
        .put(`${CONTRACT_API_URL}`, contract)
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
        .delete(`${CONTRACT_API_URL}`, {params: {contractId}} )
        .then(responce => {
            return responce.data
        })
        .catch(error => {  
            console.log(error)
            return null
        })
}