import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import {Booking} from './components/booking'
import {Login} from './components/login'
import {Confirmation} from './components/confirmation'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='booking' element= { <Booking />} > 
         <Route path='confirmation' element= { <Confirmation />} />
         </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
