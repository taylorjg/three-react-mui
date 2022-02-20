import React from "react"
import ReactDOM from "react-dom"
import { injectGlobal } from '@emotion/css'
import { createTheme, ThemeProvider } from '@mui/material'
import Settings from "./Settings"
import threeApp from "./three-app"

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

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
    <ThemeProvider theme={darkTheme}>
      <Settings threeAppActions={threeAppActions} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("container")
)

threeAppActions.init()
