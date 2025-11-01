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
let principal = ReactDOM.createRoot(document.getElementById('root'))

function App() {
  principal.render(
    <React.StrictMode>
      <Home seg={segundos1} />
    </React.StrictMode>,
  )

}

App();

let contador = setInterval(() => {
  segundos1++;
  App()
}, 1000)

//create your first component
export function botonRestar() {
  clearInterval(contador)
  segundos1 = 0
  App();
  contador = setInterval(() => {
    segundos1++;
    App()
  }, 1000)
}


