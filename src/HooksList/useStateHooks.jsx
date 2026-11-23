import { useState } from "react";

export default function UseStateHooks() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React Hook App");
  const [movie, setMovie] = useState({ name: "react", year: 2024, director: "Madhava" });
  const [movieList, setMovieList] = useState([
    { name: "react", year: 2024, director: "Madhava" },
    { name: "c#", year: 2023, director: "Madhava" },
    { name: "javascript", year: 2026, director: "Madhava" },
  ]);

  return (
    <>
      <h1>Welcome to {name}</h1>

      {/* 1. Number state */}
      <h2>Count: {count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      {/* 2. String state */}
      <h2>Name</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      {/* 3. Object state */}
      <h2>Movie</h2>
      <p>{movie.name} | {movie.year} | {movie.director}</p>
      <button onClick={() => setMovie({ ...movie, year: movie.year + 1 })}>
        Year +1
      </button>

      {/* 4. Array state */}
      <h2>Movie List</h2>
      <ul>
        {movieList.map((m) => (
          <li key={m.name}>
            {m.name} ({m.year}) - {m.director}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          setMovieList([...movieList, { name: "python", year: 2025, director: "Madhava" }])
        }
      >
        Add Movie
      </button>
      <button onClick={() => setMovieList(movieList.filter((m) => m.name !== "c#"))}>
        Remove C#
      </button>
    </>
  );
}