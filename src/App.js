import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Farm from './Farm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/farm" element={<Farm />}/> 
      </Routes>
    </Router>
  );
}

export default App;
