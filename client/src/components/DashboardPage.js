import React from 'react';
import { Grommet, Box, Heading, Button } from 'grommet';

function DashboardPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');

  localStorage.setItem('token', token);
  window.location.href = '/';

    return (
        <Grommet>
          <Box pad="medium" align="center">
            <Heading level="1">Loading Profile</Heading>
          </Box>
        </Grommet>
      );
}

export default DashboardPage;