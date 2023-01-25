function fetchBooksRequest() {
  return { type: "FETCH_BOOKS_REQUEST" };
}
function fetchBooksSuccess(books) {
  return { type: "FETCH_BOOKS_SUCCESS", books };
}

function fetchBooksFailure(error) {
  return { type: "FETCH_BOOKS_FAILURE", error };
}
export function fetchBooks() {
  return async function (dispatch) {
    try {
      dispatch(fetchBooksRequest());
      const response = await fetch(
        "https://bookhubbackend.azurewebsites.net/books"
      );
      const data = await response.json();
      // console.log(data);
      dispatch(fetchBooksSuccess(data));
    } catch (error) {
      dispatch(fetchBooksFailure(error));
    }
  };
}
