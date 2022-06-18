import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import store from './redux/store/store'
import { Provider } from 'react-redux'
import { getAllUsers } from './redux/actions/allUsers'



const root = ReactDOM.createRoot(document.getElementById('root'))
store.dispatch(getAllUsers())
root.render(
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
)
