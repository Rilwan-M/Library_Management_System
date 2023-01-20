import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

// component imporitng
import GetStarted from "./components/Pages/GetStarted";

import Dashboard from "./components/Pages/Dashboard";
import BookDetails from "./components/BookDetails";
import UserDetails from "./components/UserDetails";
import AddBook from "./components/Pages/AddBook";
import CheckoutDetails from "./components/CheckoutDetails";
import EditBook from "./components/Pages/EditBookDetails";
import Login from "./components/Pages/Login";
import Register from "./components/Pages/Register";

import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <div className="AppGlass">
        <div>{isLoggedIn ? <Sidebar /> : null}</div>

        {/* <sidebar /> */}
        <div className="table">
          <Routes>
            <Route
              exact
              path="/"
              element={<GetStarted setIsLoggedIn={setIsLoggedIn} />}
            />

            <Route
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/register"
              element={<Register setIsLoggedIn={setIsLoggedIn} />}
            />
            {}
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  setIsLoggedIn={() => {
                    setIsLoggedIn(true);
                  }}
                />
              }
            />
            <Route path="/books" element={<BookDetails />} />
            <Route path="/users" element={<UserDetails />} />
            <Route path="/checkout" element={<CheckoutDetails />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/books/:id" element={<EditBook />} />

            {/* <Route path="/listmedicines" element={<ListMedicine />} />
            <Route path="/form" element={<Form />} />
            <Route path="/updatedetails" element={<UpdateDetails />} />

            <Route path="/home" element={<Home />} />
            <Route path="/searchMedicine" element={<Searchfilter />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
