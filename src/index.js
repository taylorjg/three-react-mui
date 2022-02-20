import React from "react"
import ReactDOM from "react-dom"
import { injectGlobal } from '@emotion/css'
import App from "./App"
import { initThreeApp } from "./three-app"

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: pink;
  }
  #container {
    width: 100%;
    height: 100%;
    background-color: olive;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("container")
)

initThreeApp()
