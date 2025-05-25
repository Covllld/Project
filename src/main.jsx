import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import App from './App'
import '@mantine/core/styles.css'

const theme = {
  colorScheme: 'dark',
  colors: {
    dark: [
      '#C1C2C5',
      '#A6A7AB',
      '#909296',
      '#5C5F66',
      '#373A40',
      '#2C2E33',
      '#25262B',
      '#1A1B1E',
      '#141517',
      '#101113',
    ],
    violet: [
      '#F4EBFF',
      '#E6D6FF',
      '#D4B7FE',
      '#BC93F9',
      '#9E66F4',
      '#7833EB',
      '#5C12D6',
      '#4A0FB3',
      '#3D0C92',
      '#320A75',
    ],
  },
  primaryColor: 'violet',
  primaryShade: 6
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
)