import React from 'react';
import { Grommet, Box, Heading, Button } from 'grommet';

function LoginPage() {
    const handleGoogleLogin = () => {
      window.location.href = 'http://localhost:5000/auth/google';
    };

    return (
        <Grommet>
          <Box pad="medium" align="center">
            <Heading level="1">Welcome to Login Page!</Heading>
            <Button primary label="Login with Google" onClick={handleGoogleLogin} />
          </Box>
        </Grommet>
      );
}

export default LoginPage;