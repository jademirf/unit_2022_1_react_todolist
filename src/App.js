import Header from './components/header';
import ListItem from './components/list-item';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Todo list" />
      <section>
        <h2>Itens</h2>
        <ul>
          <ListItem title="Comprar pão" />
          <ListItem title="Lavar o carro" />
          <ListItem title="Lançar notas" />
        </ul>
      </section>
    </div>
  );
}

export default App;
