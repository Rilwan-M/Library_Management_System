import { Router, Route } from "react-router";
import createBrowserHistory from "history/createBrowserHistory";

import Home from "./Pages/Home";
import BookDetails from "./BookDetails";

const history = createBrowserHistory();

const Routing = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/books" component={BookDetails} />
        {/* <Route path="/users" component={UserDetails} /> */}
      </div>
    </Router>
  );
};

export default Routing;
