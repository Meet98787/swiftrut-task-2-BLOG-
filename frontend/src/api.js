import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this to your backend URL

export const getPosts = () => axios.get(`https://swiftrut-task-2-blog.vercel.app/api/posts`);
export const getPostById = (id) => axios.get(`https://swiftrut-task-2-blog.vercel.app/api/posts/${id}`);
export const createPost = (post) => axios.post(`https://swiftrut-task-2-blog.vercel.app`, post);
export const updatePost = (id, updatedPost) => axios.put(`https://swiftrut-task-2-blog.vercel.app/api/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`https://swiftrut-task-2-blog.vercel.app/api/posts/${id}`);
