function Book({ name, publicationYear, topic }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{publicationYear}</td>
          <td>{topic}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Book;
