import api from "./api"

const AUTH_API_URL = "/auth"

export const login = async (email, password) => {
    let request = {
        email: email,
        password: password
    }

    return api
        .post(`${AUTH_API_URL}/login`, request, { withCredentials: true })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const logout = async () => {
    return api
        .post(`${AUTH_API_URL}/logout`, {}, { withCredentials: true })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}

export const register = async (email, password, firstName, lastName) => {
    let request = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    }

    return api
        .post(`${AUTH_API_URL}/register`, request, { withCredentials: true })
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(error)
            return null
        })
}
