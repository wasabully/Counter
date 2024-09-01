import React, { useState } from "react";

const SomeComponent: React.FC = () => {
  const [data] = useState<number[]>([3, 4, 5]);
  const [current, setCurrent] = useState<number | null>(null);

  const handleSetCurrent = (value: number) => () => {
    setCurrent(value);
  };

  const handleReset = () => {
    setCurrent(null);
  };

  return (
    <div className="App">
      current: {current !== null ? current : "unset"}
      <hr />
      {data.map((value) => (
        <button key={value} onClick={handleSetCurrent(value)}>
          {value}
        </button>
      ))}
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default SomeComponent;
