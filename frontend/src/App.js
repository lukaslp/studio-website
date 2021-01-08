import React from 'react'

import './App.css';

import Routes from './routes';

function App() {
  return (
    <Routes />
  );
}

export default App;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}