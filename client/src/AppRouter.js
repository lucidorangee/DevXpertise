import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import ForumPage from './components/ForumPage';
import ForumCreatePage from './components/PostCreatePage';
import ForumDetailPage from './components/PostDetailPage';
import DashboardPage from './components/DashboardPage';

function AppRouter() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/forum" element={<ForumPage />}></Route>
            <Route path="/post/:postId" element={<ForumDetailPage />}></Route>
            <Route path="/postcreate" element={<ForumCreatePage />}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            </Routes>
        </Router>
    )
}
export default AppRouter;