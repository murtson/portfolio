import React, { useMemo } from "react";

/* 

All props that are not primitive values have to be memoized for React.memo to work 

*/

interface Props {
  value: { name: string };
}

const Child = (value: Props) => {
  console.log(value);

  return <div>Child Component</div>;
};

const ChildMemo = React.memo(Child);

const BadParent = () => {
  // if Parent re-renders value will change, causing child component to rerender aswell
  const value = { name: "Abba" };

  return <ChildMemo value={value} />;
};

const GoodParent = () => {
  const value = useMemo(() => ({ name: "Abba" }), []);
  return <ChildMemo value={value} />;
};

const ComponentWithProps = () => {
  return (
    <div>
      <h1>Component With Props</h1>
      <BadParent />
      <GoodParent />
    </div>
  );
};

export default ComponentWithProps;
