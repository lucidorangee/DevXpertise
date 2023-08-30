import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grommet, Box, Heading, Tabs, Tab } from 'grommet';

function MainPage() {
    const [activeTab, setActiveTab] = useState(0);
    const [user, setUser] = useState(null);

    const handleTabChange = index => {
        setActiveTab(index);
    };
    
    useEffect(() => {
        fetch('http://localhost:5000/api/getUser', {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <Grommet>
        <Box pad="medium" align="center">
            <Heading level="1">Welcome to the Main Page! {user && user.displayName}</Heading>
            <Tabs activeIndex={activeTab} onActive={handleTabChange}>
                <Tab title="Tab 1">
                    <Box pad="medium">
                        <Link to="/login" pad="medium">Go to Login Page</Link>
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