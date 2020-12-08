import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import { BrowserRouter, Route } from 'react-router-dom'
import HelperList from './components/HelperList';
import foodTransfer from './components/foodTransfer';
function App() {
  return (
   
    <Router>

    <div className="App">
<Contact/>
<Navbar />
<Switch>
<Route path="/" component={Contact} />
<Route path="/foodTransfer" component={foodTransfer} />
<Route path="/HelperList" component={HelperList} />
</Switch>
    </div>
    </Router>

  );
}

export default App;
