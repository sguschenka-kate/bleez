import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './scss/index.scss';
import { App } from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);