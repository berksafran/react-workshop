import { useState } from "react";

type UseCounterOptions = {
  min?: number;
  max?: number;
  step?: number;
};

export function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
  const { min, max, step = 1 } = options;
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => {
      const newValue = prev + step;
      if (max !== undefined && newValue > max) return prev;
      return newValue;
    });
  };

  const decrement = () => {
    setCount((prev) => {
      const newValue = prev - step;
      if (min !== undefined && newValue < min) return prev;
      return newValue;
    });
  };

  const reset = () => setCount(initialValue);

  const setValue = (value: number) => {
    let newValue = value;
    if (min !== undefined && newValue < min) newValue = min;
    if (max !== undefined && newValue > max) newValue = max;
    setCount(newValue);
  };

  return { count, increment, decrement, reset, setValue };
}
