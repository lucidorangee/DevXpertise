import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grommet, Box, Heading, Tabs, Tab } from 'grommet';

function MainPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const message = queryParams.get('message') === 'loggedin' ? 'Welcome back' : 'Not logged in';
    const displayName = queryParams.get('displayName') || '';

    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = index => {
        setActiveTab(index);
    };
    
    return (
        <Grommet>
        <Box pad="medium" align="center">
            <Heading level="1">Welcome to the Main Page!</Heading>
            <Tabs activeIndex={activeTab} onActive={handleTabChange}>
                <Tab title="Tab 1">
                    <Box pad="medium">
                        <Link to="/login">Go to Login Page</Link>
                    </Box>
                    
                </Tab>
                <Tab title="Tab 2">
                    <Link to="/forum" pad="medium">Go to Forum Page</Link>
                </Tab>
            </Tabs>
        </Box>
        </Grommet>
      );
}

export default MainPage;