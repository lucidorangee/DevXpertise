import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text } from 'grommet';

function Post({id, title, author, date, tags }) {
    const navigate = useNavigate()

    const tagsToDisplay = Array.isArray(tags) ? tags.join(', ') : '';

    const handlePostClick = () => {
        // Handle the box click event
        navigate(`/post/${id}`);
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
                <Text size="small">{author} - {date}</Text>
            </Box>
            <Text size="small" color="brand">{tagsToDisplay}</Text>
        </Box>
    );
}
 
export default Post;