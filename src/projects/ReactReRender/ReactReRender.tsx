import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./ReactReRender.module.scss";

const ReactReRender = () => {
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>React re-render</h1>
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default ReactReRender;
