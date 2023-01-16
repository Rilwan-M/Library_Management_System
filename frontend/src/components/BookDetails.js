// this is the module for handling alla the states from fetchBooks

import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchBooks } from "../actions/FetchBookAction";
import BasicTable from "./Table/BasicTable";

//headers for Book_Details Table
const headers = [
  { name: "Book_ID", key: "id" },
  { name: "Title", key: "title" },
  { name: "Author", key: "author" },
  { name: "ISBN", key: "isbn" },
  { name: "Description", key: "description" },
  { name: "Available", key: "available" },
];

function BookDetails({ books, isLoading, error, fetchBooks }) {
  useEffect(() => {
    fetchBooks();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul>
      {/* {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
  
            <p>Description: {book.description}</p>
          </li>
         
        ))} */}
      <BasicTable data={books} title="Book-Details" headers={headers} />
    </ul>
  );
}

const mapStateToProps = (state) => ({
  books: state.books.books,
  isLoading: state.books.isLoading,
  error: state.books.error,
});

const mapDispatchToProps = {
  fetchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
