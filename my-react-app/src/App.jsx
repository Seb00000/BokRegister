import RegisterBook from "./components/RegisterBook";
import Books from "./components/Books";
import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    {
      name: "Sult",
      publicationYear: 1890,
      topic: "Eksistensialisme",
    },
    {
      name: "Albertine",
      publicationYear: 1886,
      topic: "Realismen",
    },
    {
      name: "Victoria",
      publicationYear: 1898,
      topic: "Kjærlighet",
    },
  ]);

  return (
    <div>
      <RegisterBook books={books} setBooks={setBooks} />
      <Books books={books} setBooks={setBooks} />
    </div>
  );
}

export default App;
