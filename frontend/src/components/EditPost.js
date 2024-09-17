import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { getPostById } from '../api';  // Fetch post by ID remains unchanged
import { PostContext } from '../context/PostContext';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { editPost } = useContext(PostContext);  // Use editPost from context
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const response = await getPostById(id);
    setTitle(response.data.title);
    setContent(response.data.content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editPost(id, { title, content });
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Edit Post</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Post Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            margin="normal"
          />
          <TextField
            label="Post Content"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Update Post
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditPost;
