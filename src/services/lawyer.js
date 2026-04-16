const API_URL = "https://localhost:7286"
const LAWYER_API_URL = `${API_URL}/lawyer`

export const getLawyersList = async () => {
    const responce = await fetch(
        `${LAWYER_API_URL}/get-all`
    )

    if(!responce.ok)
        return null
    return responce.json()
}