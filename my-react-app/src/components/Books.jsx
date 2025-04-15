import Book from "./Book";
import Button from "./ui/Button";

function Books({ books, setBooks }) {
  const onClick = (index) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };
  return (
    <div id="books">
      {books.map((book, index) => {
        return (
          <div className="book" key={index}>
            <Book
              name={book.name}
              publicationYear={book.publicationYear}
              topic={book.topic}
            />
            <Button handleClick={() => onClick(index)} name="Slett bok" />
          </div>
        );
      })}
    </div>
  );
}

export default Books;
