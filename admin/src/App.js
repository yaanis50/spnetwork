import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Users from './pages/Users'
import Feature from './pages/Features'
import Landing from './pages/Landings'
import Service from './pages/Services'
import Member from './pages/Members'
import Partner from './pages/Partners'
import Login from './pages/Login'

import {BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthProvider } from './context/auth';
import DynamicRoutes from './utils/DynamicRoutes';



function App() {
 
  return (
    
    <AuthProvider>
    <Router>
      
        <div className="wrapper">
          <Sidebar/>
          <div className="main">
          


          <Switch>
            <DynamicRoutes exact path="/Login" component={Login} guest />
            
            <DynamicRoutes exact path="/Features" component={Feature} authenticated/>
            <DynamicRoutes exact path="/Users" component={Users} authenticated/>
            <DynamicRoutes exact path="/Landings" component={Landing} authenticated/>
            <DynamicRoutes exact path="/Services" component={Service} authenticated/>
            <DynamicRoutes exact path="/Members" component={Member} authenticated/>
            <DynamicRoutes exact path="/Partners" component={Partner} authenticated/>
            
          </Switch>
          <Footer />
          </div>
        </div>
      
    </Router>
    </AuthProvider>
  );
}

export default App;
