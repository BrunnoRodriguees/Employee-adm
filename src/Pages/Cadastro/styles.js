import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: 100vw;
  max-width: 980px;
  width: 90%;
  background-image: url("https://abracd.org/wp-content/uploads/2019/07/bureau-696x418.jpg");
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
gap: 10px 0px;
box-shadow: 0 6px 9px -2px #989898;

  h1 {
    color: white;
    font-size: 20px;
    font-weight: light;
  }

  p {
    color: white;
    font-size: 16px;
    font-weight: bold; 
  }

  a {
    color: white;
    font-size: 14px;
    text-decoration: none;
  }

  input::placeholder {
    color: white;
  }
`

export const SubContainerSign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px 20px;
  align-items: center;
`
