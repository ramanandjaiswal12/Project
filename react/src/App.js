import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MoviesList from './component/movieslist';

import './App.css';

function App() {
  return (
    <Router>
      <div className='main'>
        <Routes>
          <Route exact path="/movies-list" element={<MoviesList />} />
        </Routes>
      </div >
    </Router>



  );
}

export default App;
