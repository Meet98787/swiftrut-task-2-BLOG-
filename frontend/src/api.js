import axios from 'axios';

const API_URL = 'https://swiftrut-task-2-blog.vercel.app/api'; // Change this to your backend URL

export const getPosts = () => axios.get(`${API_URL}/posts`);
export const getPostById = (id) => axios.get(`${API_URL}/posts/${id}`);
export const createPost = (post) => axios.post(`${API_URL}/posts`, post);
export const updatePost = (id, updatedPost) => axios.put(`${API_URL}/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${API_URL}/posts/${id}`);
