import React, {Component} from 'react';
import { NavLink, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
// import 'semantic-ui-css/semantic.min.css'
import './App.css';

import Home from './components/Home.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      // activeItem: 'home',
      // audioOnly:false,
    };
  }

  render() {
    return (
      <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<Home currentPage='about' />}></Route>
          <Route path='/projects' element={<Home currentPage='projects' />}></Route>
          <Route path='/contact' element={<Home currentPage='contact' />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
