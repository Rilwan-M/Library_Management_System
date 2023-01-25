// this is the module for handling alla the states from fetchBooks

import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchBooks } from "../actions/FetchBookAction";
import BasicTable from "./Table/BasicTable";

import "../App.css";

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
    <div>
      <BasicTable data={books} title="Book Details" headers={headers} />
    </div>
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
