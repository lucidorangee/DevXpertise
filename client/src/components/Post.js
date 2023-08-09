import React from 'react';
import { Box, Text } from 'grommet';

function Post({id, title, author, date, tags }) {
    const tagsToDisplay = Array.isArray(tags) ? tags.join(', ') : '';

    console.log(id, title, author, date, tags);

    return (
        <Box border="all" pad="medium" margin="small">
            <Text size="xlarge" weight="bold">{title}</Text>
            <Box direction="row" justify="between">
                <Text size="small">{author} - {date}</Text>
            </Box>
            <Text size="small" color="brand">{tagsToDisplay}</Text>
        </Box>
    );
}
 
export default Post;