import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Subscribers from './Apps/Subscribers/Subscribers';
import Counter from './Apps/Counter/Counter';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/subscribers" element={<Subscribers/>}/>
        <Route path="/counter" element={<Counter/>}/>

      </Routes>
    </BrowserRouter>


  );
}

export default App;
