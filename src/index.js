import React from "react"
import ReactDOM from "react-dom"
import { injectGlobal } from '@emotion/css'
import Settings from "./Settings"
import threeApp from "./three-app"

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

const threeAppActions = threeApp()

ReactDOM.render(
  <React.StrictMode>
    <Settings threeAppActions={threeAppActions} />
  </React.StrictMode>,
  document.getElementById("container")
)

threeAppActions.init()
