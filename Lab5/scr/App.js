import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Route from "./routs";
import { BrowserRouter } from 'react-router-dom';

function App() 
{
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Route/>
      </BrowserRouter>
    </div>
  );
}

export default App;
