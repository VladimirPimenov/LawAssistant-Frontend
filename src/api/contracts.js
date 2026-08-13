import api from "./api"

const CONTRACT_API_URL = `/contracts`

export const getContract = async (contractId) => {
    return api
        .get(`${CONTRACT_API_URL}`, {params: {contractId}, withCredentials: true})
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const getContractFile = async (contractId) => {
    return api
        .get(`${CONTRACT_API_URL}/${contractId}/file`, {responseType: 'blob', withCredentials: true})
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
    console.log(contract)
    const contractRequest = new FormData()
    contractRequest.append('title', contract.title)
    contract.authorsId.forEach(id => {
        contractRequest.append('authorsId', id.toString())
    })
    contractRequest.append('contractFile', contract.contractFile)

    return api
        .post(`${CONTRACT_API_URL}`, contractRequest, 
                { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true })
        .then(response => {
            return response.data
        })
        return null
}

export const updateContract = async (contract) => {
    return api
        .put(`${CONTRACT_API_URL}`, contract, { withCredentials: true })
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const removeContract = async (contractId) => {
    return api
        .delete(`${CONTRACT_API_URL}`, {params: {contractId}, withCredentials: true} )
        .then(responce => {
            return responce.data
        })
        .catch(error => {  
            console.log(error)
            return null
        })
}
