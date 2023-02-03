// import axios from 'axios'

const baseURL = process.env.USERS_API_ENDPOINT

// const API = axios.create({baseURL:baseURL})


export const getUsersApi = async () =>{
    const response = await fetch(baseURL)
    const data = await response.json()
    return data
}
  