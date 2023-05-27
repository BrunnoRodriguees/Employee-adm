import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  
  width: 90%;
  background-image: url("https://edgeinformation.com/wp-content/uploads/2020/12/employee-background-screening.jpg");
  background-size: cover;
`

export const Form = styled.form`
  font-family: 'Roboto', sans-serif;
  font-color: blue;
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #314c53;
  border-radius: 5px;
  width: 90%;
  max-width: 450px;
  gap: 30px 0px;
  box-shadow: 0 6px 9px -2px #989898;

  h1 {
    color: white;
    font-size: 26px;
    font-weight: light;
  }

  input::placeholder {
    color: white;
  }

  p {
    font-family: 'Roboto', sans-serif;
    color: #bbdec6;
    font-size: 16px;
    font-weight: bold; 
    
  }

  

  

  a {
    color: white;
    font-size: 14px;
    text-decoration: none;
  }
`

export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
  
  

  
`
