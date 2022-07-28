import axios from "axios";

const axiosService = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

const albumsService = () => axiosService('/albums');
const commentsService = () => axiosService('/comments');
const todosService = () => axiosService('/todos');
const postsService = () => axiosService('/posts');
const postCurrentService = (id) => axiosService(`/posts/${id}`)

export {albumsService, commentsService, todosService, postsService, postCurrentService};

