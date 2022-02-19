import React from 'react'
import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signin from './Signin';
import Profile from './Profile';

import { NavBar } from '../components'
import { MoviesList, MoviesInsert, MoviesUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Signin />
  }

    return (
        <div className="wrapper">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Profile/>} />
                    <Route path="/profile" element={<Profile/>} />        
                    <Route path="/movies/list" element={<MoviesList/>} />
                    <Route path="/movies/create" element={<MoviesInsert/>} />
                    <Route path="/movies/update/:id" element={<MoviesUpdate/>} />
                </Routes>
            </Router>
        </div>
        
    )
}

export default App