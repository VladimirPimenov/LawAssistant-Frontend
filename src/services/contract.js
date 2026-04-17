const API_URL = "https://localhost:7286"
const CONTRACT_API_URL = `${API_URL}/contract`

export const getContract = async (contractId) => {
    const responce = await fetch(
        `${CONTRACT_API_URL}/get-contract?contractId=${contractId}`
    )

    if(!responce.ok)
        return null
    return responce.json()
}

export const getLawyerContracts = async (lawyerId) => {
    const responce = await fetch(
        `${CONTRACT_API_URL}/get-lawyer-contracts?lawyerId=${lawyerId}`
    )

    if(!responce.ok)
        return null
    return responce.json()
}

export const updateContract = async (contract) => {
    const responce = await fetch(
        `${CONTRACT_API_URL}/update-contract`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contract)
    })

    if(!responce.ok)
        return null
    return responce.json()
}

export const removeContract = async (contractId) => {
    const responce = await fetch(
        `${CONTRACT_API_URL}/delete-contract?contractId=${contractId}`,
        {method: "DELETE"}
    )

    if(!responce.ok)
        return null
}