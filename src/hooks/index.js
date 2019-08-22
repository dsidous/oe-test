import { useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(1);
  return {
    value: count,
    increase: () => setCount(prevCount => prevCount + 1),
    decrease: () => setCount(prevCount => ((prevCount > 1) ? prevCount - 1 : 1)),
  };
};
