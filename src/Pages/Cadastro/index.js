import {useState} from 'react'
import { Container, Form, SubContainerSign } from './styles'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Botao/index'
import { validarEmail, validarSenha, validarTelefone, validarNome, validarConfirmarSenha } from '../../Utils/validadores'
import UserService from '../../Services/UserService'
import { NavLink, useNavigate } from 'react-router-dom'

const userService = new UserService()

const Cadastro = () => {
  const [loading, setLoading] = useState()
  const [form, setForm] = useState([])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      const { data } = await userService.cadastrar({
        nome: form.nome,
        telefone: form.telefone,
        email: form.email,
        password: form.password,
      })
      if (data) {
        const responseLogin = await userService.login({
          email: form.email,
          password: form.password
        })
        if (responseLogin === true) {
          alert('usuário Cadastrado com Sucesso')
          navigate('/home')
        }
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
    return validarEmail(form.email) 
    && validarSenha(form.password)
    && validarTelefone(form.telefone)
    && validarConfirmarSenha(form.password, form.confirmarPassword)
    && validarNome(form.nome)
  }

  return (
    <Container>
      <Form>
        <h1>EMPLOYEE ADMINISTRATION </h1>
        <p>Register</p>
        <Input
          name='nome'
          placeholder='Enter your name'
          onChange={handleChange}
          type='text'
        />
        <Input
          name='telefone'
          placeholder='Enter your phone'
          onChange={handleChange}
          type='number'
        />
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
        <Input
          name='confirmarPassword'
          placeholder='Confirm your password'
          onChange={handleChange}
          type='password'
        />
        <Botao
          type='submit'
          text='Register'
          onClick={handleSubmit}
          disabled={loading === true || !validadorInput()}
        />
        <SubContainerSign>
          <p>Already have an account?</p>
          <NavLink to="*">Login</NavLink>
        </SubContainerSign>
      </Form>
    </Container>
    
  )
}

export default Cadastro;