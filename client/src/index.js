import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import 'normalize.css'
import './scss/index.scss'
import { App } from './App.jsx'
import { MainLayout } from './layouts/MainLayout'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainLayout>
        <App />
      </MainLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);