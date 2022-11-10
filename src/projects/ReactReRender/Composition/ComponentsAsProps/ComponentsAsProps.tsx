import React, { ReactElement, ReactNode, useState } from "react";
import classes from "./ComponentsAsProps.module.scss";

const BadComponent = () => {
  const [value, setValue] = useState(true);

  return (
    <div>
      <h3>Bad Component</h3>
      <VerySlowComponent />
      <button onClick={() => setValue(!value)}>Click me to change state</button>
      <VerySlowComponent />
    </div>
  );
};

const GoodComponent = () => {
  return (
    <div>
      <h3>Good Component</h3>
      <ComponentWithButton
        left={<VerySlowComponent />}
        right={<VerySlowComponent />}
      />
    </div>
  );
};

type ComponentWithButtonProps = {
  left: ReactElement;
  right: ReactElement;
};

const ComponentWithButton = ({ left, right }: ComponentWithButtonProps) => {
  const [value, setValue] = useState(true);
  // button click triggers re-render, but since left and right
  // are props they wont be affected
  return (
    <>
      {left}
      <button onClick={() => setValue(!value)}>Click me to change state</button>
      {right}
    </>
  );
};

const VerySlowComponent = () => {
  console.log("------------");
  console.log("i rerendered very slow component");
  console.log("------------");
  return (
    <div>
      <h3>Very slow component</h3>
    </div>
  );
};

const ComponentsAsProps = () => {
  return (
    <div className={classes.root}>
      <BadComponent />
      <GoodComponent />
    </div>
  );
};

export default ComponentsAsProps;
