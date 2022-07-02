import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/comments'
});

const getComment = (post) => axiosInstance.post('', post);

export {getComment};