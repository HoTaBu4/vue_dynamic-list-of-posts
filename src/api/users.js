import { client } from "../utils/axiosCLient";

const url = 'https://mate.academy/students-api'

export const setUser = (user) => {
    return client.post('/users',user);
};

export const getUser = (id) => {
    return client.get(`/users/${id}`);
};