import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@material-ui/core";
import { motion } from "framer-motion";
import { fadeIn } from "react-animations";
import book1 from "../../imgs/img1.jpeg";
import book2 from "../../imgs/img2.jpeg";
import book3 from "../../imgs/img3.jpeg";

import "../../App.css";
import Sidebar from "../Sidebar/Sidebar";
const useStyles = makeStyles((theme) => ({
  rootr: {
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // fontFamily: "Inter", sansserif
  },

  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    // backgroundColor: theme.palette.background.default,
    // background: "#ffe0e0",
    // minHeight: "100vh",
  },
  title: {
    fontSize: "2rem",
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    textAlign: "center",
    fontWeight: "bold",
    animation: "$fadeIn 1s",
  },
  description: {
    fontSize: "1.5rem",
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  cardContainer: {
    margin: theme.spacing(2),
  },
  card: {
    maxHeight: 450,
    maxWidth: 450,
    margin: theme.spacing(2),
  },
  cardMedia: {
    height: 390,
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  "@keyframes fadeIn": fadeIn,
}));

const Dashboard = () => {
  const classes = useStyles();
  const { animate } = motion();

  return (
    <div>
      <div className={classes.root} maxWidth="md">
        <Typography
          className={classes.title}
          variant="h2"
          component="h1"
          animate={animate}
        >
          Welcome to our Library Management System
        </Typography>
        <Typography
          className={classes.description}
          variant="body1"
          component="p"
        >
          Here you can search, borrow and return books, view your account
          information and more.
        </Typography>

        <Grid container spacing={2} className={classes.cardContainer}>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image={book1} />
              {/* <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Book 1
              </Typography>
            </CardContent> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image={book2} />
              {/* <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Book 1
              </Typography>
            </CardContent> */}
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image={book3} />
              {/* <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Book 1
              </Typography>
            </CardContent> */}
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
