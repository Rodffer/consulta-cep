import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root{
    min-height: 100%;
  }
  body {
    background: -webkit-linear-gradient(-90deg,  #42e695  0%, #3bb2b8 100%);
    font-size: 22px;
    font-family: 'MuseoModerno', cursive;
  }
  h1, p, label {
    color: #2a2d32
  }
  button {
    cursor: pointer;
  }
`