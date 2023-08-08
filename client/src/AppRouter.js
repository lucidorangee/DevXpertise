import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginPage from './components/LoginPage';
import ForumPage from './components/ForumPage';

function AppRouter() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/forum" element={<ForumPage />}></Route>s
            </Routes>
        </Router>
    )
}
export default AppRouter;