import axios from "axios";

const authApi = axios.create({
    baseURL: 'http://localhost:3333'
})

export default authApi