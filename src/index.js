/**
 * CRA entry point: mounts <App /> onto #root and loads global styles.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
)
