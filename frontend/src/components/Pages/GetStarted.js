import React from "react";
import "./GetStarted.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Getstarted from "../../imgs/img4.jpg";
const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="GetStartedinside">
      <div className="GetStarted">
        <div className="l">
          <div className="firstline">
            “The only thing that you absolutely have to know, is the location of
            the library.”
            <div className="para">
              <div className="first">
                <p>Get into library</p>
              </div>
            </div>
            <Button
              variant="contained"
              onClick={() => navigate("/login")}
              sx={{
                backgroundColor: "#ff1493",
                maxWidth: "50%",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: 50,
                marginTop: "3%",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="r">
          <div className="get">
            <div>
              <img src={Getstarted} alt="logo" height={700} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
