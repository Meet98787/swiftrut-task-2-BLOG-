import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../api';
import { Container, Typography, Box } from '@mui/material';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const response = await getPostById(id);
    setPost(response.data);
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>{post.title}</Typography>
        <Typography variant="body1" gutterBottom>{post.content}</Typography>
        <Typography variant="caption">Posted on: {new Date(post.createdAt).toLocaleDateString()}</Typography>
      </Box>
    </Container>
  );
};

export default PostDetail;
