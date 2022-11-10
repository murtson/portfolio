import React, { useEffect, useState } from "react";
import classes from "./MovingStateDown.module.scss";

const VerySlowComponent = () => {
  console.log("-------------------");
  console.log("re-rendered");
  return (
    <div>
      <h3>Very slow component</h3>
      <h4></h4>
    </div>
  );
};

const VerySlowComponentMemo = React.memo(VerySlowComponent);

const BadComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <h4>I am the bad component</h4>
      <button onClick={() => setIsOpen(!isOpen)}>Click me</button>
      {isOpen && <div>Modal</div>}
      <VerySlowComponent />
    </div>
  );
};

const GoodComponent = () => {
  return (
    <div>
      <h4>I am the good component</h4>
      <ButtonWithDialog />
      <VerySlowComponent />
    </div>
  );
};

const ButtonWithDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Click me</button>
      {isOpen && <div>Modal</div>}
    </div>
  );
};

const MovingStateDown = () => {
  return (
    <div className={classes.root}>
      <h2>Moving State Down</h2>
      <div className={classes.content}>
        <GoodComponent />
        <BadComponent />
      </div>
    </div>
  );
};

export default MovingStateDown;
