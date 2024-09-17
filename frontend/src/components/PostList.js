import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, CardContent, Typography, Button, Grid, Box } from '@mui/material';
import { PostContext } from '../context/PostContext';

const PostList = () => {
  const { posts, removePost } = useContext(PostContext);  // Use posts and removePost from context

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>All Blog Posts</Typography>
        <Grid container spacing={3}>
          {posts.map((post) => (
            <Grid item xs={12} sm={6} key={post._id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{post.title}</Typography>
                  <Typography variant="body2">{post.content.substring(0, 100)}...</Typography>
                  <Box mt={2}>
                    <Button component={Link} to={`/post/${post._id}`} variant="contained" color="primary" size="small">
                      View
                    </Button>
                    <Button component={Link} to={`/edit/${post._id}`} variant="contained" size="small" sx={{ ml: 2 }}>
                      Edit
                    </Button>
                    <Button onClick={() => removePost(post._id)} variant="contained" color="secondary" size="small" sx={{ ml: 2 }}>
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default PostList;
