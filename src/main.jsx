import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App.jsx'
import { GlobalStyles } from './GlobalStyles.js'

const theme = {
  colors: {
    greenish : "#149e9e",
    blackish: "#000100"
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
)
