import React from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Content from './components/Content';
import { Outlet } from 'react-router';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;