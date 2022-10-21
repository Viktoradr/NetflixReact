import axios from "axios";

const http = axios.create({
    baseURL: process.env.REACT_APP_TMDB_BASE
})

export default http;