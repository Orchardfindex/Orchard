import React, { useState } from 'react';
import PageRouter from "./components/Page_router.jsx"
import './App.css';
import './dist/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => { //function toggle true or false
    setIsOpen(!isOpen)
  }
  return (
    <Router> 
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <PageRouter />
    </Router>
  );
}

export default App;
