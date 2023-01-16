import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import FetchBookReducer from "../reducers/FetchBookReducer";
import FetchUserReducer from "../reducers/FetchUserReducer";
import FetchCheckoutReducer from "../reducers/FetchCheckoutReducer";

// combine reducers
const rootReducer = combineReducers({
  users: FetchUserReducer,
  books: FetchBookReducer,
  checkout: FetchCheckoutReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
