import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
});
const getUser = () => axiosInstance('users').then(value => value);
const getPost = () => axiosInstance('posts');

export {getUser,getPost};