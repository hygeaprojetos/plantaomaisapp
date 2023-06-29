import axios from "axios";

const api = axios.create({
    baseURL: 'http://10.0.12.10:3001'
})
export {api}