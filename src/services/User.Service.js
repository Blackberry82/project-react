import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});
const getUsers = () => axiosInstance.get('').then(value => value);

const getUser = (id) => axiosInstance.get('/' + id).then(value => value.data);

const getUserPosts= (id) => axiosInstance('/' + id + '/posts').then(value => value);

export {getUsers, getUser, getUserPosts};