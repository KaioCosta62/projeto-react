import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import {deepPurple, red} from '@material-ui/core/colors';

import {AuthProvider} from './state/auth'

const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[800]
    },
    secondary: {
      main: red[900]
    }
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)

