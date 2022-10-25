import {useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Gracias from './pages/Gracias';
import Home from './pages/home';
import Plan from './pages/Plan';
import Nosencontro from './pages/404';
function App() {

  return (
    <>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/plan" element={<Plan />}></Route>
            <Route path="/gracias" element={<Gracias />}></Route>
            <Route path="*" element={<Nosencontro />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
