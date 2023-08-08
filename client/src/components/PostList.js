import React from 'react';
import { Box } from 'grommet';
import Post from './Post';

function PostList({ posts, searchQuery }) {
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().injcludes(searchQuery.toLowerCase())
    );

    return(
        <Box>
            {filteredPosts.map((post) => (
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    data={post.date}
                    tags={post.tags}
                />
            ))}
        </Box>
    );
}

export default PostList;