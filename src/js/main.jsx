import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components

import Home from './components/Home';
let segundos1 = 0;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home seg={segundos1} />
  </React.StrictMode>,
)

//create your first component
setInterval(() =>{
  segundos1++;
  ReactDOM.createRoot(document.getElementById('root')).render(
      <Home seg={segundos1} />
  )
}, 1000)

