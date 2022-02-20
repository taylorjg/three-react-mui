import React from "react"
import ReactDOM from "react-dom"
import { injectGlobal } from '@emotion/css'
import Settings from "./Settings"
import initThreeApp from "./three-app"

injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
  }
  #container {
    width: 100%;
    height: 100%;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Settings />
  </React.StrictMode>,
  document.getElementById("container")
)

initThreeApp()
