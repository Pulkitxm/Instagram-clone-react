import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './app.css'

//components
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import Home from './components/Home.js';
import Search from './components/Search.js';
import Explore from './components/Explore.js';
import Reels from './components/Reels.js';
import Messages from './components/Messages.js';
import Notifications from './components/Notifications.js';
import Profile from './components/Profile.js';

export default ()=> {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="app-content">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}