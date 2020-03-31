import React, { useState } from 'react';
import './App.css';

// libraries
import { Route } from 'react-router-dom'

// components
import Nav from './components/homepage/nav.jsx'
import TestComponent from './components/homepage/testcomponent.jsx'
import Admincp from './pages/admincp.jsx'

// pages
import Homepage from './pages/homepage.jsx'
import Signup from './pages/signup.jsx'


const App = () => {

  // const [num, setNum] = useState(0)
  // const add = () => {
  //   setNum(num+1)
  // }
  return (
    <div>
      <Route path='/' component={Nav} /> 

      <Route exact path='/' component={Homepage} />

      <Route path='/home' component={Homepage} />

      <Route path='/signup' component={Signup} />

      <Route path='/admin_control_panel' component={Admincp} />

      {/* <TestComponent click={add} value={num} /> */}
    </div>
  );
}

export default App;
