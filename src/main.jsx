//  Component import
import App from './App.jsx'
import store from './Redux/store.js'
//  Css import
import './index.css'

// Library import

// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom/client'




createRoot(document.getElementById('root')).render(

  <Provider store ={store}>
  <BrowserRouter>
 
   
    <App />
    <Toaster/>
  

  </BrowserRouter>
  </Provider>
)
