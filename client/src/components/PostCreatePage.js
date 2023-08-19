import React, { useState, useEffect } from 'react';
import { Grommet, Box, Heading, FormField, Text, TextInput, SelectMultiple } from 'grommet';
import axios from 'axios';
import SearchBar from './SearchBar';
import PostList from './PostList';

function PostCreatePage() {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // Post Details
    const [title, setTitle] = React.useState('');
    const [tags, setTags] = React.useState([]);

    const handleSubmitClick = () => {
      // Handle the box click event
      const newPostData = {
        title: title,
        author: 'John Doe',
        date: '2023-08-10',
        tags: tags,
        comments: [],
      };
      
      fetch('http://localhost:5000/api/createpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPostData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message); // Message from the server
        })
        .catch((error) => {
          console.error(error);
        });
    };

    useEffect(() => {
        axios.get('http://localhost:5000/api/post')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Grommet>
          <Box pad="medium" align="center">
            <Heading level="1">Create a post!</Heading>
            <TextInput
              placeholder="Title"
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            <SelectMultiple 
              placeholder="Select Tags"
              options={['C','C++','Python','Javascript']}
              onChange={event => setTags(event.value)}
            />
            <Box 
            border="all" 
            pad="medium" 
            margin="small"
            background="light-2"
            hoverIndicator="dark-4"
            onClick={handleSubmitClick}
            >
                <Text size="xlarge" weight="bold">Title</Text>
                <Box direction="row" justify="between">
                    <Text size="small">Author - Date</Text>
                </Box>
                <Text size="small" color="brand">tagsToDisplay</Text>
            </Box>
          </Box>
        </Grommet>
      );
}

export default PostCreatePage;