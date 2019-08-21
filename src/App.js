import React from 'react';
import './App.css';

import Header from './components/MainPage/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="App-container">      
    <div className='App'>
        <Header />
        <Footer />
      </div>
    </div>

    </>
  );
}

export default App;
