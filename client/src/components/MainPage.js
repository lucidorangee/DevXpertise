import React from 'react';
import { Link } from 'react-router-dom';
import { Grommet, Box, Heading } from 'grommet';

function MainPage() {
    return (
        <Grommet>
        <Box pad="medium" align="center">
            <Heading level="1">Welcome to the Main Page!</Heading>
            <div>
            <h1>Welcome to the Main Page!</h1>
            <Link to="/login">Go to Login Page</Link>
            <Link to="/forum">Go to Forum Page</Link>
            </div>
        </Box>
        </Grommet>
      );
}

export default MainPage;