import React from "react";
import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#212121",
  },
  spacing: {
    paddingRight: 20,
    marginRight: 10,
    color: "#fff",
    fontSize: "18px",
    textDecoration: "none",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <NavLink to="/" className={classes.spacing}>
          {" "}
          Home
        </NavLink>
        <NavLink to="/createCard" className={classes.spacing}>
          {" "}
          Create Card
        </NavLink>
        <NavLink to="/showCards" className={classes.spacing}>
          {" "}
          Edit Card
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
