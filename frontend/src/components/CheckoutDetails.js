import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCheckout } from "../actions/FetchCheckoutAction";
import BasicTable from "./Table/BasicTable";

import CheckoutTable from "./Table/CheckoutTable";

//headers for Table
const headers = [
  { name: "Checkout ID", key: "id" },
  { name: "User ID", key: "user_id" },
  { name: "Book ID", key: "book_id" },
  //   { name: "Check Out Date", key: "check_out_date" },
  //   { name: "Due Date", key: "due_date" },
  //   { name: "Returned Date", key: "return_date" },
  { name: "Status", key: "status" },
];

function CheckoutDetails({ checkout, isLoading, error, fetchCheckout }) {
  useEffect(() => {
    fetchCheckout();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {/* {checkout.map((check) => (
        <li key={check.id}>
          <h2>Check:{check.book_id}</h2>
          <p>User: {check.user_id}</p>

          <p>Status: {check.status}</p>
        </li>
      ))} */}
      <CheckoutTable
        data={checkout}
        title="Books CheckOut Details"
        headers={headers}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  checkout: state.checkout.checkout,
  isLoading: state.checkout.isLoading,
  error: state.checkout.error,
});

const mapDispatchToProps = {
  fetchCheckout,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutDetails);
