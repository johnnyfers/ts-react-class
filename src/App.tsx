import './App.css';
import Todos from './components/Todos/index'

function App() {

  const dummyTodos = [
    { id: Math.random().toString(), text: 'learn react' },
    { id: Math.random().toString(), text: 'learn ts' }
  ]

  return (
    <div className="App">
      <Todos items={dummyTodos} />
    </div>
  );
}

export default App;
