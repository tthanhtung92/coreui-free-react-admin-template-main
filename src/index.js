import 'core-js'
import React from 'react'
import 'react-app-polyfill/stable'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { AuthProvider } from './contexts/AuthProvider'
import store from './store'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Provider>,
)
