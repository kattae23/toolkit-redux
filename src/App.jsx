import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter';

function App() {

  const { counter } = useSelector(state => state.counter)
  const dispatch = useDispatch();


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>count is { counter }</h2>
      <div className="card">
        <button onClick={() => dispatch( increment() )}>
          Increment
        </button>
        <button onClick={() => dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={() => dispatch( incrementByAmount(5) )}>
          Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
