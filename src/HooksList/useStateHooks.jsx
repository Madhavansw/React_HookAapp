import { useState } from "react";

export  default function useStateHooks() {
    const[count,setCount] = useState(0);
    const[name,setName] = useState("React Hook App");
    const[movie,setMovie] = useState({name:"react", year: 2024, director:"Madhava" });
    const[movieList, setMovieList] = useState([
        {name:"react", year:2024, director: "Madhava"},
        {name:"c#", year:2023, director:"Madhava"},
        {name:"javascript", year: 2026, director:"Madhava"}
    ]);
    return(
        <>
        <h1>Welcome to React Hook App</h1>
        <h2>count:{count}</h2>
        <div>
            <button onClick={() => {setCount(count+ 1)}}>Increment</button>
            <button onClick={() => {setCount(count - 1)}}>Decrement</button>
        </div>
        </>
    )


}

