import React from 'react';
import Navbar from './components/layout/Navbar'
import Countries from './components/country/Countries'

function App() {
  return (
    <div className="App">
      <Navbar title='CoronaTracker' />
      <CountryItem />
    </div>
  );
}

export default App;
