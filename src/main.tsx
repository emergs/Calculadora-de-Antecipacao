import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Provider from './contexts'
import GlobalStyle from './styles/GlobalStyles'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider>
      <GlobalStyle />
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
)
