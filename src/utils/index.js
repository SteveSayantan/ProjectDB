import axios from "axios";

export const customInstance= axios.create({
    baseURL:'/api/v1'
})