import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SearchBlock } from './SearchPage/Search/SearchBlock';

function App() {
  return (
    <div className="App-wrapper">
      <Routes>
        <Route path='/' element={<SearchBlock />} />
      </Routes>
    </div>
  );
}
export default App;
