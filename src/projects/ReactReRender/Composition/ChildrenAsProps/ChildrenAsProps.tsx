import React, { ReactNode, useState } from "react";
import classes from "./ChildrenAsProps.module.scss";

const BadComponent = () => {
  const [value, setValue] = useState({});

  return (
    <div onScroll={(e) => setValue(e)}>
      <VerySlowComponent />
    </div>
  );
};

const GoodComponent = () => {
  return (
    <ComponentWithScroll>
      <VerySlowComponent />
    </ComponentWithScroll>
  );
};

const ComponentWithScroll = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState({});
  // since children is props, they are not affected
  return <div onScroll={(e) => setValue(e)}>{children}</div>;
};

const VerySlowComponent = () => {
  console.log("i am slow component and re-rendered");
  return <div>I am a very slow component</div>;
};

const ChildrenAsProps = () => {
  return (
    <div className={classes.root}>
      <h2>Children as props</h2>
      <BadComponent />
      <GoodComponent />
    </div>
  );
};

export default ChildrenAsProps;
