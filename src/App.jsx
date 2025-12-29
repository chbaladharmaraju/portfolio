import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home';
import Notfound from './assets/pages/Notfound';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App