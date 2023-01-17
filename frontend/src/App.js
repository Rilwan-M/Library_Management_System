import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

// component imporitng
import Dashboard from "./components/Pages/Dashboard";

import BookDetails from "./components/BookDetails";
import UserDetails from "./components/UserDetails";
import AddBook from "./components/Pages/AddBook";
import CheckoutDetails from "./components/CheckoutDetails";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

// const AppLayout = () => {
//   <>
//     <Sidebar />
//     <Outlet />
//   </>;
// };

// export const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Dashboard />,
//       },
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/books",
//         element: <BookDetails />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <div>
          <Sidebar />
        </div>
        <div className="table">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />

            <Route path="/books" element={<BookDetails />} />
            <Route path="/users" element={<UserDetails />} />
            <Route path="/checkout" element={<CheckoutDetails />} />
            <Route path="/addbook" element={<AddBook />} />
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
