import React from 'react';
import logo from './logo.svg';
import './App.css';
import Component from './Component';
const Task = (value) => {
  return <li>{value}</li>;
};
function App() {
  return <Task />;
}

export default App;
