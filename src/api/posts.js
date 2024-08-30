import { client } from "../utils/axiosCLient";

export const getUserPosts = (userId) => {
  return client.get(`/posts?userId=${userId}`);
};

export const getPosts = () => {
  return client.get('/posts');
};

export const setPost = (post) => {
  return client.post(`/posts`,post);
}