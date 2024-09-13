//  Component import
import App from './App.jsx'

//  Css import
import './index.css'

// Library import

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {BrouserRouter} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client'



createRoot(document.getElementById('root')).render(
  <Provider store ={store}>
  <BrouserRouter>
    <App />
    <Toaster/>
  </BrouserRouter>
  </Provider>
)
