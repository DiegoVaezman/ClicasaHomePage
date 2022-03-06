import axios from "axios";

// const baseURL = "http://192.168.100.140:8080"; //DEV HOME IP
const baseURL = "https://clicpiso.herokuapp.com";

const clicasaApi = axios.create({ baseURL });

export default clicasaApi;
