import './App.css';
import {useState} from 'react'

function App() {
const [counter, setCounter] = useState(0)

const Rest = ()=>{
  setCounter(counter-1)
}

const Plus = () => {
  setCounter(counter + 1)
}

 

  return (
    <div className="App">
      <h1>Hi there!</h1>
      <button onClick={Rest}>Rest</button>
      <p>counter is {counter}</p>
      <button onClick={Plus}>Plus</button>
    </div>
  );
}

export default App;
