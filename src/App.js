import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import { Routes, Route } from 'react-router-dom';
//import ContactPage from './pages/ContactPage.js'
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import './App.css';
import {useDispatch } from 'react-redux'
import { useEffect } from 'react';
import BlogsDirectoryPage from './pages/BlogsDirectoryPage.js';
import { fetchBlogs } from './features/display/blogsSlice.js';

function App() {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchBlogs())
  // }, [dispatch])
  

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/About' element={<AboutPage />}></Route>
        <Route path='/Directory' element={<BlogsDirectoryPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
