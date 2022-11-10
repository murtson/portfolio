import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./Composition.module.scss";

const Composition = () => {
  return (
    <div className={classes.root}>
      <h1>Composition</h1>
      <Outlet />
    </div>
  );
};

export default Composition;
