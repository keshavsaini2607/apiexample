import React from 'react'
import './App.css';
import Navbar from './components/Navbar';

import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <div className="appHeader">
        <Navbar />
      </div>
      <MovieCard />
    </div>
  );
}

export default App;
