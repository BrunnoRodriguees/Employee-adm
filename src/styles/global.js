import { createGlobalStyle } from "styled-components";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Roboto', sans-serif;
    margin: auto;
    padding: 0;
    box-sizing: border-box; 
    width: 100%
    max-width: 980px;
    
  }

  body {
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%
    max-width: 980px;
    margin: auto;

  }

`

export default GlobalStyle;

//box-sizing: border-box serve para que possamos não se preocupar com as medidas, ou seja, height e width sempre serão os mesmo, independente do padding ou margin. Se você tiver um componente com 100px de largura (width), e ele receber 10px de padding, ele irá diminuir os elementos filhos para poder manter esses 100px totais na largura!