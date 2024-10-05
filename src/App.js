import React from 'react';
import Spinner from './components/Spinner';

const App = () => {
  return (
    <div>
      <h2>Bootstrap-like Color - Border Spinner</h2>
      <Spinner animation="border" color="primary" size="3rem" />

      <h2>Custom Hex Color - Grow Spinner</h2>
      <Spinner animation="grow" color="info" size="2rem" />
    </div>
  );
};

export default App;
