import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './styles.css';

interface Post {
  title: string;
  link: string;
}

interface LatestPostsProps {
  posts: Post[];
}

const LatestPosts: React.FC<LatestPostsProps> = ({ posts }) => {
  return (
    <Box className="latest-posts-container">
      <Typography variant="h6" className="latest-posts-title">
        Bài viết mới nhất
      </Typography>
      <List>
        {posts.map((post, index) => (
          <ListItem button component="a" href={post.link} key={index} className="post-item">
            <ListItemIcon>
              <ChevronRightIcon />
            </ListItemIcon>
            <ListItemText primary={post.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default LatestPosts;
