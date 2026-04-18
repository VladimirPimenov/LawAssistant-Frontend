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

export const getContractFile = async (contractId) => {
    return axios
        .get(`${CONTRACT_API_URL}/get-contract-file`, {params:{contractId}, responseType: 'blob'})
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
        .post(`${CONTRACT_API_URL}/create-contract`, contractRequest, 
                { headers: { "Content-Type": "multipart/form-data" }})
        .then(response => {
            return response.data
        })
        return null
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