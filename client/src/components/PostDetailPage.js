import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grommet, Box, Heading, FormField } from 'grommet';
import axios from 'axios';

function ForumDetailPage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/posts/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.error(error));
    }, [id]);

    if (!post)
    {
      return <div>Loading...</div>;
    }

    return (
        <Grommet>
          <Box pad="medium" align="center">
            <Heading level="2">{post.id} - {post.title}</Heading>
            <p>{post.author}</p>
          </Box>
        </Grommet>
      );
}

export default ForumDetailPage;