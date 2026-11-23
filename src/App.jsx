import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const[name, setName] = useState("React Hook App");
  const[person , setPerson] = useState({name:"jhon",age:30,professional:"developer"});

  return (
  <>
  <div>
     <h1>Welcome to the HookList App</h1>
     <h2>Count: {count}</h2>
     <h2>Name : {name}</h2>
     <h2>Person Details:</h2>
     <ul>
       <li>Name: {person.name}</li>
       <li>Age: {person.age}</li>
       <li>Professional: {person.professional}</li>
     </ul>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  </div>
  </>
  )
}

export default App
