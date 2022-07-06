import axios from "axios";

const axiosService = axios.create({
    baseURL:'http://owu.linkpc.net/api/v2'
});
const urls = {
    cars: '/cars'
}

export {axiosService, urls};