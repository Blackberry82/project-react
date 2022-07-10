import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

const getTodos = () => axiosInstance.get('/todos');
const getAlbums = () =>  axiosInstance.get('/albums');
const getComments = () => axiosInstance.get('/comments');
const getPosts = (id) => axiosInstance.get('/posts/' + id).then(value => value.data);

export {getTodos, getAlbums, getComments, getPosts};