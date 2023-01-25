import "./App.css";

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
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

//combining with HOC
import withSidebar from "./HOC/withSidebar";

const DashboardWithSidebar = withSidebar(Dashboard);
const BookDetailsWithSidebar = withSidebar(BookDetails);
const UserDetailsWithSidebar = withSidebar(UserDetails);
const CheckoutDetailsWithSidebar = withSidebar(CheckoutDetails);

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggenIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = async (event, email, password) => {
    event.preventDefault();
    try {
      const res = await axios.get(
        `https://bookhubbackend.azurewebsites.net/users/${email}?password=${password}`
      );
      if (res.status === 404) {
        alert("User not found");
      } else {
        console.log(res.status);
        alert("Login Successful!!");
        setIsLoggedIn(true);
        navigate("/dashboard");
      }
    } catch (err) {
      alert("User not found or password mismatched");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="App">
        <div className="AppGlass">
          <div className="content">
            <div>
              <Sidebar />
            </div>

            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/books" element={<BookDetails />} />
              <Route path="/users" element={<UserDetails />} />
              <Route path="/checkout" element={<CheckoutDetails />} />
              <Route path="/addbook" element={<AddBook />} />
              <Route path="/books/:id" element={<EditBook />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <div className="AppGlass">
          {/* <Route exact path="/" element={<GetStarted />} /> */}
          {/* <Route
            path="/login"
            element={
              isLoggedIn ? (
                console.log("ok")
              ) : (
                <Login handleLogin={handleLogin} />
              )
            }
          /> */}
          {/* <Route path="/login" element={<Login handleLogin={handleLogin} />} /> */}
          {/* <Login handleLogin={handleLogin} /> */}
          <Routes>
            <Route exact path="/" element={<GetStarted />} />
            <Route
              path="/login"
              element={<Login handleLogin={handleLogin} />}
            />
          </Routes>

          {/* <Route
            path="/dashboard"
            element={() => {
              if (isLoggedIn) {
                return (
                  <>
                    <div>
                      <Dashboard />
                    </div>
                  </>
                );
              } else {
                navigate("/login");
              }
            }}
          />*/}

          {/* <Route exact path="/" element={<GetStarted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardWithSidebar />} />
          <Route path="/books" element={<BookDetailsWithSidebar />} />
          <Route path="/users" element={<UserDetailsWithSidebar />} />
          <Route path="/checkout" element={<CheckoutDetailsWithSidebar />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/books/:id" element={<EditBook />} /> */}
        </div>
      </div>
    );
  }
}

export default App;

// function App() {

//   return (
//     <div className={"App"}>
//       <div className="AppGlass">
//         <Routes className="AppGlass">
//           <Route exact path="/" element={<GetStarted />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={<DashboardWithSidebar />} />
//           <Route path="/books" element={<BookDetailsWithSidebar />} />
//           <Route path="/users" element={<UserDetailsWithSidebar />} />
//           <Route path="/checkout" element={<CheckoutDetailsWithSidebar />} />
//           <Route path="/addbook" element={<AddBook />} />
//           <Route path="/books/:id" element={<EditBook />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// export default App;
