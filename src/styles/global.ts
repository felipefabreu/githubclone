import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  -webkit-font-smoothing: antialiased;

}

body, input, button{
  font: 14px Segoe UI;
}

a{
  text-decoration: none;
}

`;
