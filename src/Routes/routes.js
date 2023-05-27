import React from 'react'
import LoginEmployeeAdmin from '../Pages/LoginEmployeeAdmin/loginEmployeeAdmin'
import ProtectedRoutes from '../Routes/ProtectedRoutes'
import Cadastro from '../Pages/Cadastro/index'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Routering = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="*" element={<LoginEmployeeAdmin/>} />
        <Route path="/cadastrar" element={<Cadastro/>} />
        <Route path="/home" element={
          <ProtectedRoutes>
            <h1>Home</h1> 
          </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
   );
}
 
export default Routering;