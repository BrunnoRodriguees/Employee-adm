import {useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Botao/index'
import { validarEmail, validarSenha } from '../../Utils/validadores'
import UserService from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'

const userService = new UserService()

const Login = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("debbug");
      setLoading(true)
      const response = await userService.login(form)
      console.log('response do Login', response)
      // response === true
      if (response === true) {
        alert('usuário Logado com Sucesso')
        navigate('/home')
      }
      setLoading(false)
    }
    catch (err) {
      alert('Algo deu errado com o Cadastro' + err);      
      setTimeout( () =>{ window.location.reload();
      }, "3000");

    }
  }

  const handleChange = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password)
  }

  return (
    <Container>
      <Form>
        <h1>EMPLOYEE ADMINISTRATION</h1>
        
        <Input
          name='email'
          placeholder='Enter your email'
          onChange={handleChange}
          type='email'
        />
        <Input
          name='password'
          placeholder='Enter your password'
          onChange={handleChange}
          type='password'
        />
        <Botao
          type='submit'
          text='LOGIN'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSign>
          <p>No registration?</p>
          <NavLink to="cadastrar">Register</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Login;