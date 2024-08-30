import { client } from "../utils/axiosCLient";

export const setUser = (user) => {
    return client.post('/users',user);
};

export const getUser = (id) => {
    return client.get(`/users/${id}`);
};