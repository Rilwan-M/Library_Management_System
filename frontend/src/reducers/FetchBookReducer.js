//module for fetchBook reducers

const initialState = {
  books: [],
  error: null,
  isLoading: false,
};

export function FetchBookReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return { ...state, isLoading: true };
    case "FETCH_BOOKS_SUCCESS":
      return { ...state, books: action.books, isLoading: false };
    case "FETCH_BOOKS_FAILURE":
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
}

export default FetchBookReducer;
