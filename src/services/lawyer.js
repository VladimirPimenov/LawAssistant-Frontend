import axios from "axios"

const API_URL = "https://localhost:7286"
const LAWYER_API_URL = `${API_URL}/lawyer`

export const getLawyersList = async () => {
    return axios
        .get(`${LAWYER_API_URL}/get-all`)
        .then(responce => {
            return responce.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}