import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { SearchBlock } from './SearchPage/Search/SearchBlock';

function App() {
  return (
    <div className='main'>
      <Header/>
      <div className="App-wrapper">
      <Routes>
        <Route path='/' element={<SearchBlock />}>
          <Route path='search' element={<SearchBlock />} />
        </Route>
      </Routes>
    </div>
    <Footer/>
    </div>
  );
}
export default App;
