import React from 'react';
import './App.css';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header.tsx';
import Products from './app/Products.tsx';
import AddProduct from './app/AddProduct.tsx';
import DetailsProduct from './app/DetailsProduct.tsx';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className='p-8'>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/DetailsProduct" element={<DetailsProduct />} />
        </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
