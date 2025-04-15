import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";

function Registration({ books, setBooks }) {
  // Definerer noen states for input, her kunne ting forenkles med useReducer-hook dersom man har mange states, jeg personlig bruker det sjeldent
  const [name, setName] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [topic, setTopic] = useState("");

  const onName = (value) => setName(value);

  const onPublicationYear = (value) => setPublicationYear(value);

  const onTopic = (value) => setTopic(value);

  const onClick = () => {
    // switch case brukes dersom man skal sjekke mange ting (mye raskere en if-elif-else kondisjoner, vet ikke hvorfor da hehe)
    switch ("") {
      case name:
        alert("Navn må være definert");
        break;
      case publicationYear:
        alert("Utgivelseår må være definert");
        break;
      case topic:
        alert("Sentral tema må være definert");
        break;
      default:
        const newBook = { name, publicationYear, topic };
        setBooks([...books, newBook]); // bruker spread operatoren for å ta en kopi av arrayen
        /*
          Det er det samme som:
          const newBook = { name, publicationYear, topic };
          const copyBooks = books.slice();
          copyBooks.append(newBook);
          setBooks(copyBooks);
        */
        break;
    }
  };

  return (
    <div id="registrering">
      <Input value={name} handleChange={onName} placeholder="Navn" />
      <Input
        value={publicationYear}
        handleChange={onPublicationYear}
        placeholder="Utgivelseår"
      />
      <Input value={topic} handleChange={onTopic} placeholder="Sentralt tema" />
      <Button handleClick={onClick} name="Submit" />
    </div>
  );
}

export default Registration;
