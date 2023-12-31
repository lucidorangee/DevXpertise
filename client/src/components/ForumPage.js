import React, { useState, useEffect } from 'react';
import { Grommet, Box, Heading, Grid, Text } from 'grommet';
import { FormSearch } from 'grommet-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SearchBar from './SearchBar';
import PostList from './PostList';

function ForumPage() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleCreatePostClick = () => {
      // Handle the box click event
      
      navigate(`/postcreate`);
    };

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Grommet>

          <Box pad="medium" align="center">
            <Heading level="1">Welcome to Forum Page!</Heading>
              <Grid
              rows={[['xxsmall', 'xxsmall'],['xxsmall', 'large']]}
              columns={[['xsmall', 'large'],['xxsmall', 'xsmall']]}
              gap="small"
              areas={[
                { name: 'header', start: [0, 0], end: [0, 0] },
                { name: 'search', start: [1, 0], end: [1, 0] },
                { name: 'main', start: [0, 1], end: [1, 1] },
              ]}
              >
              <Box gridArea="header" background="light-3">
                <SearchBar onChange={setSearchQuery} />
              </Box>
              <Box gridArea="search" background="light-1" align='center'>
                <FormSearch color='plain' size='large' />
              </Box>
              <Box gridArea="nav" background="light-5" />
              <Box gridArea="main" background="light-2" >
                <Box 
                border="all" 
                pad="medium" 
                margin="small"
                background="light-2"
                hoverIndicator="dark-4"
                onClick={handleCreatePostClick}
                >
                    <Text size="xlarge" weight="bold">Create Post</Text>
                </Box>
                <PostList posts={posts} searchQuery={searchQuery} />
                
              </Box>
            </Grid>
          </Box>
        </Grommet>
      );
}

export default ForumPage;