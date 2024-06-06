import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return <li key={value.toString()}>{value}</li>;
};

const tasks = ['limpar', 'guardar', 'estudar', 'trabalhar'];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <div>
        <p>Aqui vão as tarefas:</p>
        <ul>{tasks.map((task) => Task(task))}</ul>
      </div>
    </div>
  );
}

export default App;
