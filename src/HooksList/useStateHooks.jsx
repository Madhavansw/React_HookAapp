import { useState } from "react";

export default function UseStateHooks() {
  const [movieList, setMovieList] = useState([
    { id: 1, name: "react", year: 2024, director: "Madhava" },
    { id: 2, name: "c#", year: 2023, director: "Madhava" },
    { id: 3, name: "javascript", year: 2026, director: "Madhava" },
  ]);
  const [selectedId, setSelectedId] = useState(null);

  const removeMovie = (id) => {
    setMovieList(movieList.filter((m) => m.id !== id));
    if (selectedId === id) setSelectedId(null); // clear the selection if it was removed
  };

  const selectedMovie = movieList.find((m) => m.id === selectedId);

  return (
    <>
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
                e.stopPropagation(); // don't also trigger the row's select click
                removeMovie(m.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      {selectedMovie ? (
        <div>
          <h3>Selected: {selectedMovie.name}</h3>
          <p>{selectedMovie.year} | {selectedMovie.director}</p>
        </div>
      ) : (
        <p>No movie selected</p>
      )}
    </>
  );
}