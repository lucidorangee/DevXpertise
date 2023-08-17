import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text } from 'grommet';

function Post({postId, title, author, date, tags }) {
    const navigate = useNavigate();

    const tagsToDisplay = Array.isArray(tags) ? tags.join(', ') : '';

    // Function to delete all posts
    const deleteAllPosts = () => {
        fetch('http://localhost:5000/api/posts', {
        method: 'DELETE',
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.message); // Message from the server
            // Perform any additional actions after deletion
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const handlePostClick = () => {
        console.log(postId);
        // Handle the box click event
        navigate(`/post/${postId}`);
    };

    return (
        <Box 
        border="all" 
        pad="medium" 
        margin="small"
        background="light-2"
        hoverIndicator="dark-4"
        onClick={handlePostClick}
        >
            <Text size="xlarge" weight="bold">{title}</Text>
            <Box direction="row" justify="between">
                <Text size="small">{postId} : {author} - {date}</Text>
            </Box>
            <Text size="small" color="brand">{tagsToDisplay}</Text>
        </Box>
    );
}
 
export default Post;