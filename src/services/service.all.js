import axios from "axios";

import {baseURL} from "../constances";
import {urls} from "../constances";

const axiosService = axios.create({baseURL});

const userService = {
    getAll: () => axiosService.get(urls.users)
};

const postService = {
    getAll: () => axiosService.get(urls.posts),
    getAllByUserId: (userId) => axiosService.get(urls.posts, {params: {userId}})
};


export {axiosService, userService, postService};