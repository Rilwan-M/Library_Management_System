//reducer for FetchUser from DB

const initialState = {
  checkout: [],
  error: null,
  isLoading: false,
};
export function FetchCheckoutReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CHECKOUT_REQUEST":
      return { ...state, isLoading: true };
    case "FETCH_CHECKOUT_SUCCESS":
      return { ...state, users: action.checkout, isLoading: false };
    case "FETCH_CHECKOUT_FAILURE":
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
}

export default FetchCheckoutReducer;
