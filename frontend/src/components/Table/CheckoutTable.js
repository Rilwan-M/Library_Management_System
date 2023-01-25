import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Table.css";

import { UilEdit, UilTrashAlt } from "@iconscout/react-unicons";

const makeStyle = (status) => {
  if (status === "Available") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Not returned yet") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

const CheckoutTable = (props) => {
  const navigate = useNavigate();
  const { data, title, headers } = props;

  const handleDelete = (id, component) => {
    switch (component) {
      case "Book Details":
        axios
          .delete(`https://bookhubbackend.azurewebsites.net/books/${id}`)
          .then((res) => {
            console.log(res);
            console.log(res.data);
            alert("Book deleted Successfully!!");
            navigate("/dashboard");
          })
          .catch((error) => {
            console.log(error);
            alert("Error deleting book");
            navigate("/dashboard");
          });
        break;
      case "Book Readers":
        axios
          .delete(`https://bookhubbackend.azurewebsites.net/users/${id}`)
          .then((res) => {
            // console.log(res);
            console.log(res.data);
            alert("User deleted Successfully!!");
            navigate("/dashboard");
          })
          .catch((error) => {
            console.log(error);
            alert("Error deleting user");
            navigate("/dashboard");
          });
        break;

      default:
        break;
    }
  };
  // console.log(data);
  return (
    <div className="Table">
      <h3>{title}</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "12px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {/* headers */}
          <TableHead>
            <TableRow>
              {headers.map((headers) => (
                <TableCell key={headers.key}>{headers.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/* populating table records */}
          <TableBody style={{ color: "white" }}>
            {data.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                  {row.name}
                </TableCell> */}
                {headers.map((header) => {
                  console.log(item[header.key]);
                  return (
                    <TableCell align="left">
                      {/* this is for boolean type ternary operator */}
                      {item[header.key]}
                    </TableCell>
                  );
                })}
                <TableCell className="icon">
                  <UilTrashAlt
                    className="delete-icon"
                    onClick={() => handleDelete(item.id, title)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CheckoutTable;
