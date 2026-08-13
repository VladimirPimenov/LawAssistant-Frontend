import axios from "axios"

const API_URL = "https://localhost:7286"

export default axios.create({
        baseURL: API_URL,
        withCredentials: true
    })