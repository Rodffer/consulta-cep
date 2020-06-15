import React, {useState} from 'react';
import api from '../../services/api';
import InputMask from 'react-input-mask';
import { Container }from '../../components/Container';

const Main = ({ history }) => {
  const [consult, setConsult] = useState('');
  function handleInputChange(event) {
    setConsult(event.target.value)
  }
  async function handleSubmit(event) {
    event.preventDefault()
    if (consult === '') {
      history.push({pathname: '/city'})
    }
    const response = await api.get(`${consult}`)
      history.push({pathname: '/city', data: response.data})
  }
  return (
    <Container>
    <h1>Consulta CEP</h1>
      <form onSubmit={handleSubmit}>
        <label>
          CEP
        </label>
          <InputMask type="text" placeholder="Digite um CEP" onChange={handleInputChange} mask="99999-999"/>
        <button type="submit">
          Pesquisar
        </button>
      </form>
    </Container>
  )
}

export default Main;