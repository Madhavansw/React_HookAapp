import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const[name, setName] = useState("React Hook App");
  const[person , setPerson] = useState({name:"jhon",age:30,professional:"developer"});
  const[personList, setPersonList] = useState([{name:"jhon",age:30,professional:"developer"},{name:"jane",age:25,professional:"designer"},{name:"jack",age:35,professional:"manager"}]);    


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
     <h2>Person List:
       <ul>
         {personList.map((person, index) => (
           <li key={index}>
             {person.name} - {person.age} - {person.professional}
           </li>
         ))}
       </ul>
     </h2>
     <h2>PersonList </h2>
     <ul>
      {
        personList.map((person,index) =>(
          <li key = {index} >{person.name} - {person.age} - {person.professional} </li>
        ) )
      }
     </ul>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  </div>
  </>
  )
}

export default App
