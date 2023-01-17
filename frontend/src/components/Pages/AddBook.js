import { useState } from "react";
import { Grid, TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
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
      backgroundColor: "#ffe4e1",
    },
  },
}));

const AddBook = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    isbn: "",
    description: "",
    available: false,
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
    try {
      await axios.post("http://localhost:5000/books", formData);
      alert("Book added successfully");
      console.log(formData);
      setFormData({
        title: "",
        author: "",
        publisher: "",
        isbn: "",
        description: "",
        available: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <form className={classes.formControl} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                fullWidth
                value={formData.title}
                onChange={handleChange}
                name="title"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="author"
                label="Author"
                variant="outlined"
                fullWidth
                value={formData.author}
                onChange={handleChange}
                name="author"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="publisher"
                label="Publisher"
                variant="outlined"
                fullWidth
                value={formData.publisher}
                onChange={handleChange}
                name="publisher"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="isbn"
                label="ISBN"
                variant="outlined"
                fullWidth
                value={formData.isbn}
                onChange={handleChange}
                name="isbn"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                label="Description"
                variant="outlined"
                fullWidth
                value={formData.description}
                onChange={handleChange}
                name="description"
                required
              />
            </Grid>
            {/* Other form fields */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="available"
                    checked={formData.available}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label="Available"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                className={classes.addButton}
                type="submit"
              >
                Add Book
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddBook;
