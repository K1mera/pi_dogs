import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {DogctionaryApp} from './DogctionaryApp.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DogctionaryApp />
    </BrowserRouter>
  </React.StrictMode>,
)
