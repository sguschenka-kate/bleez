import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import {createStore} from 'redux'
import { Provider } from 'react-redux'
import {rootReducer} from './store/reducers'

import { App } from './App.jsx'
import { MainLayout } from './layouts/MainLayout'

import 'normalize.css'
import './scss/index.scss'


const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <Router>
        <MainLayout>
          <App />
        </MainLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);