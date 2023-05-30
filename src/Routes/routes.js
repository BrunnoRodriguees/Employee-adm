import React from 'react'
import LoginEmployeeAdmin from '../Pages/LoginEmployeeAdmin/loginEmployeeAdmin'
import CadastroEmployeeAdmin from '../Pages/CadastroEmployeeAdmin/cadastroEmployeeAdmin'
import ProtectedRoutes from '../Routes/ProtectedRoutes'
//import Cadastro from '../Pages/Cadastro/index'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Routering = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="*" element={<LoginEmployeeAdmin/>} />
        <Route path="*" element={<cadastroEmployeeAdmin/>} />
        <Route path="/cadastroEmplyeeAdmin" element={<CadastroEmployeeAdmin/>} />
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