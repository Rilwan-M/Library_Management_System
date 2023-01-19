//reducer for FetchUser from DB

const initialState = {
  users: [],
  error: null,
  isLoading: false,
};
export function FetchUserReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return { ...state, isLoading: true };
    case "FETCH_USERS_SUCCESS":
      return { ...state, users: action.users, isLoading: false };
    case "FETCH_USERS_FAILURE":
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
}

export default FetchUserReducer;
