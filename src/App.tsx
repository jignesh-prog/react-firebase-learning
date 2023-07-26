import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import {Booking} from './components/booking'
import {Login} from './components/login'
import {Confirmation} from './components/confirmation'
import {Signup} from './components/signup'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='booking' element= { <Booking />} /> 
         <Route path='/signup' element= { <Signup />} /> 
         <Route path='/confirmation' element= { <Confirmation />} />
      
      
        
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
