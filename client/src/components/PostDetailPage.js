import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grommet, Box, Heading } from 'grommet';
import axios from 'axios';

function ForumDetailPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    console.log("GOING TO ", postId);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/post/${postId}`)
            .then(response => setPost(response.data))
            .catch(error => console.error(error));
    }, [postId]);

    if (!post)
    {
      return <div>Loading...</div>;
    }

    return (
        <Grommet>
          <Box pad="medium" align="center">
            <Heading level="2">{post.postId} - {post.title}</Heading>
            <p>{post.author}</p>
          </Box>
        </Grommet>
      );
}

export default ForumDetailPage;