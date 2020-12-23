import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from './components/AppNavbar'
import Admin from './components/Admin'
import './App.css';

function App() {
  return (
    <div className="App">
    <AppNavbar/>
    <Admin/>
    </div>
  );
}

export default App;
