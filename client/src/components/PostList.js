import React from 'react';
import { Box } from 'grommet';
import Post from './Post';

function PostList({ posts, searchQuery }) {
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    console.log("FIRST ", filteredPosts[0]);

    return(
        <Box>
            {filteredPosts.map((post) => (
                <Post
                    postId={post._id}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    tags={post.tags}
                />
            ))}
        </Box>
    );
}

export default PostList;