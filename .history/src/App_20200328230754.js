import React from 'react';
import Navbar from './components/layout/Navbar'
import CountryItem from './components/country/CountryItem'

function App() {
  return (
    <div className="App">
      <Navbar title='CoronaTracker' />
      <CountryItem />
    </div>
  );
}

export default App;
