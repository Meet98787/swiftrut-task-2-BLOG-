import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { PostContext } from '../context/PostContext';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(PostContext);  // Use addPost from context
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addPost({ title, content });
    navigate('/');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>Create a New Post</Typography>
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
            Create Post
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default CreatePost;
