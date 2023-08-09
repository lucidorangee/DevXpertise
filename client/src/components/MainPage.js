import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grommet, Box, Heading } from 'grommet';

function MainPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const message = queryParams.get('message') === 'loggedin' ? 'Welcome back' : 'Not logged in';
    const displayName = queryParams.get('displayName') || '';
    
    return (
        <Grommet>
        <Box pad="medium" align="center">
            <Heading level="1">Welcome to the Main Page!</Heading>
            <div>
            <h1>{message}, {displayName}</h1>
            <Link to="/login">Go to Login Page</Link>
            <Link to="/forum">Go to Forum Page</Link>
            </div>
        </Box>
        </Grommet>
      );
}

export default MainPage;