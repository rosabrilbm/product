import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header.tsx';
import Products from './components/app/Products.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='p-8'>
        <Routes>
          <Route path="/" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
