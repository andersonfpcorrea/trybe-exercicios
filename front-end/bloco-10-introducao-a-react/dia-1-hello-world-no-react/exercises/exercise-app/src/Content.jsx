import React from 'react';
import './App.css';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

class Content extends React.Component {
  render() {
    return conteudos.map((el, index) => (
      <ul className='Content'>
        <li key={el.conteudo + index.toString(10)}>
          O conteúdo é: {el.conteudo}
        </li>
        <li key={el.status + index.toString(10)}>Status: {el.status}</li>
        <li key={el.bloco + index.toString(10)}>Bloco: {el.bloco}</li>
      </ul>
    ));
  }
}

export default Content;
