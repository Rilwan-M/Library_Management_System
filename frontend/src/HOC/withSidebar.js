import React from "react";
import "../main.css";
import Sidebar from "../components/Sidebar/Sidebar";

const withSidebar = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div className="content">
          <div>
            <Sidebar />
          </div>
          <div>
            <WrappedComponent />
          </div>
        </div>
      );
    }
  };
};

export default withSidebar;
