import { useState } from "react";

function UseStateHooksTwo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Welcome to UseStateHook");
  const [movie, setMovie] = useState({ name: "javascript", year: 2026, director: "Madhava" });

  const [movieList, setMovieList] = useState([
    { id: 1, name: "react", year: 2024, director: "Madhava" },
    { id: 2, name: "c#", year: 2023, director: "Madhava" },
  ]);
  const [selectedId, setSelectedId] = useState(null);

  // form fields for adding a movie
  const [newName, setNewName] = useState("");
  const [newYear, setNewYear] = useState("");
  const [newDirector, setNewDirector] = useState("");

  const removeList = (id) => {
    setMovieList(movieList.filter((x) => x.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const addMovieList = () => {
    if (!newName.trim()) return; // ignore empty names

    const newMovie = {
      id: Date.now(), // simple unique id
      name: newName,
      year: Number(newYear),
      director: newDirector,
    };

    setMovieList([...movieList, newMovie]);

    // clear the form
    setNewName("");
    setNewYear("");
    setNewDirector("");
  };

  const selectedMovie = movieList.find((x) => x.id === selectedId);

  return (
    <>
      <h1>{name}</h1>

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      <h2>Add Movie</h2>
      <input placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <input placeholder="Year" value={newYear} onChange={(e) => setNewYear(e.target.value)} />
      <input placeholder="Director" value={newDirector} onChange={(e) => setNewDirector(e.target.value)} />
      <button onClick={addMovieList}>Add</button>

      <h2>Movie List</h2>
      <ul>
        {movieList.map((m) => (
          <li
            key={m.id}
            onClick={() => setSelectedId(m.id)}
            style={{
              cursor: "pointer",
              background: selectedId === m.id ? "#cce5ff" : "transparent",
            }}
          >
            {m.name} ({m.year}) - {m.director}
            <button
              onClick={(e) => {
                e.stopPropagation();
                removeList(m.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {selectedMovie ? (
        <p>Selected: {selectedMovie.name}</p>
      ) : (
        <p>No movie selected</p>
      )}
    </>
  );
}

export default UseStateHooksTwo;