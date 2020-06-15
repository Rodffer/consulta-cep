import styled from 'styled-components';
import { shade } from 'polished';
export const Container = styled.div`
  background: #fff;
  max-width: 500px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  margin: 30px auto;
  min-height: 130px;
  h1 {
    text-align: center;
  }

  form {
    text-align: center;
  }
  label {
    margin-left: auto;
    margin-bottom: auto;
  }
  input {
    margin-left: 10px;
    flex: 1;
    height: 30px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #2a2d32;
    border-right: 0;
    
    &::placeholder {
      font-size: 15px;
    }
  }

  button {
    width: 100px;
    height: 30px;
    background: #3bb2b8;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#3bb2b8')};
    }
  }

  div {
    text-align: center;
  }
`;