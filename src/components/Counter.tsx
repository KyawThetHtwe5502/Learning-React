import React from "react";
import useCounterStore from "../store/useCounterStore";

const Counter: React.FC = () => {
  const { count, resetCount, increaseCount, decreaseCount } = useCounterStore();
  const handleReset = () => {
    return resetCount();
  };
  const handleIncrease = () => {
    return increaseCount(5);
  };
  const handleDecrease = () => {
    return decreaseCount();
  };
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Counter</h1>
      <div className="flex items-center mb-4">
        <button
          onClick={handleDecrease}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
        >
          -
        </button>
        <span className="mx-4 text-xl">{count}</span>
        <button
          onClick={handleIncrease}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
        >
          +
        </button>
      </div>
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
      >
        {" "}
        Reset
      </button>
    </div>
  );
};

export default Counter;
