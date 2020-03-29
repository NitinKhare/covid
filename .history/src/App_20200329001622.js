import React from 'react';
import Navbar from './components/layout/Navbar'
import Countries from './components/country/Countries'

function App() {
  componentDidMount()
  return (
    <div className="App">
      <Navbar title='CoronaTracker' />
      <div className="container">
      <div className="text-center">
      <Countries />
      </div>
      </div>
      </div>
  );
}

export default App;
