import React from 'react';
import Navbar from './components/layout/Navbar'
import Countries from './components/country/Countries'

function App() {
  return (
    <div className="App">
      <Navbar title='CoronaTracker' />
      <div className="container"></div>
      <div className="text-center">
      <Countries />
      </div>
      </div>
  );
}

export default App;
