import { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    // display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formControl: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 450,
    minWidth: 75,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  grid: {
    margin: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    margin: theme.spacing(1),
    backgroundColor: "#ff1493",
    color: "white",
    "&:hover": {
      backgroundColor: "#ff69b4",
    },
  },
}));

const Login = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <Grid container className={classes.grid}>
      <Grid item className={classes.grid} xs={12}>
        <form
          className={classes.formControl}
          onSubmit={(event) =>
            props.handleLogin(event, formData.email, formData.password)
          }
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                fullWidth
                value={formData.password}
                onChange={handleChange}
                name="password"
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                className={classes.addButton}
                type="submit"
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
