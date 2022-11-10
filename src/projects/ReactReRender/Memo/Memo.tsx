import React, { useState, useCallback, useMemo } from "react";

/* 

Wrapping a component in React.memo will stop the downstream chain of re-renders 
that is triggered somewhere up the render tree, unless this component’s props have changed.

This can be useful when rendering a heavy component that is not dependent on 
the source of re-renders (i.e. state, changed data).

*/

interface ChildProps {
  setValue: (e: boolean) => void;
}

const Child = ({ setValue }: ChildProps) => {
  console.log("I am child and i re-render");
  console.log("-------------");
  return <div>I am the child component</div>;
};

const MemoedChild = React.memo(Child);

const BadParent = () => {
  const [value, setValue] = useState(false);

  const expensiveFunction = (e: boolean) => {
    setValue(e);
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Bad Parent</h2>
      <button
        style={{ backgroundColor: "#ccc", padding: 10 }}
        onClick={() => setValue(!value)}
      >
        Change state
      </button>
      <Child setValue={expensiveFunction} />
    </div>
  );
};

const GoodParent = () => {
  const [value, setValue] = useState(false);

  const memoizedFunction = useCallback(
    () => (e: boolean) => {
      setValue(e);
    },
    []
  );

  const notMemoizedFunction = (e: boolean) => {
    setValue(e);
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h2>Good Parent</h2>
      <button
        style={{ backgroundColor: "#ccc", padding: 10 }}
        onClick={() => setValue(!value)}
      >
        Change state
      </button>
      <MemoedChild setValue={memoizedFunction} />
    </div>
  );
};

const Memo = () => {
  return (
    <div>
      <h1>Memo</h1>
      <BadParent />
      <GoodParent />
    </div>
  );
};

export default Memo;
