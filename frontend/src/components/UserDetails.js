// this is the module for handling alla the states from fetchUsers

import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions/FetchUserAction";

import BasicTable from "./Table/BasicTable";

//headers for Book_Details Table
const headers = [
  { name: "User_ID", key: "id" },
  { name: "User Name", key: "username" },
  { name: "E-mail", key: "email" },
];

function UserDetails({ users, isLoading, error, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul>
      {/* {users.map((user) => (
        <li key={user.id}>
          /* <h2>{user.id}</h2>
          <p>Username: {user.username}</p>

          <p>Email: {user.email}</p>
        </li>
      ))}  */}
      <BasicTable data={users} title="Book Readers" headers={headers} />
    </ul>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  error: state.users.error,
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
