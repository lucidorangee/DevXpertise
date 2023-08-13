import React, { useState, useEffect } from 'react';
import { Grommet, Box, Heading, FormField } from 'grommet';
import axios from 'axios';
import SearchBar from './SearchBar';
import PostList from './PostList';

function ForumCreatePage() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Grommet>
          <Box pad="medium" align="center">
            <Heading level="1">Create a post!</Heading>
            <FormField>Example</FormField>
          </Box>
        </Grommet>
      );
}

export default ForumCreatePage;