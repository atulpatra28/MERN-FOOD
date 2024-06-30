// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Cursor from './components/cursor';

function App() {
  return (
    <div className="App">
      <Cursor /> {/* Include the Cursor component here */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/cart" element={<Cartscreen />} />
        <Route path="/register" element={<Registerscreen />} />
        <Route path="/login" element={<Loginscreen />} />
      </Routes>
    </div>
  );
}

export default App;
