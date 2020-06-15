import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import formatCEP from '../../utils/formatCEP';
import {Container} from '../../components/Container';
const City = (props) => {
  const [ dataConsult, setDataConsult] = useState('');
  useEffect(() => {
    setDataConsult(props.history.location.data)
  }, [props.history.location.data])

  return( 
  <>
    <Container>
      <h1>Resultado da Busca</h1>
      <div>
        {
          dataConsult?
          <>
            <p>CEP: {formatCEP(dataConsult.cep)}</p>
            <p>Cidade: {dataConsult.cidade}</p>
            <p>Estado: {dataConsult.estado}</p>
            {
              dataConsult.bairro?
              <p>Bairro: {dataConsult.bairro}</p>

              :
              <p>Bairro indisponivel</p>
            }
            <Link to='/'>Voltar</Link>
          </>
          :
          <>
            <p> Digite um CEP válido </p>
              <Link to='/'>Voltar</Link>
          </>
        }
      </div>
    </Container>
  </>
  )
}

export default City;