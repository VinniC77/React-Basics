import './App.css';
import { useState, useRef } from 'react'
import Todoitem from './components/TodoItem';

function App() {
  const [value, setValue] = useState('')
  const [data, setData] = useState([])
  const inputEl = useRef(null)

  const handleClick = () => {
    setData(prev => [...prev, value])
    setValue('')
    inputEl.current.focus()
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input ref={inputEl} type="text" value={value} onChange={event => setValue(event.target.value)} />
          <button onClick={handleClick}>Add</button>
        </div>
        <div>
          <ul>
          {
            data.map((item, index) => (
              <Todoitem key={index}>
                {item}
              </Todoitem>
            ))
          }
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
