/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useContext, useState } from 'react';

const contextInitValue = {
  count: 0,
  plusCount: () => {},
  minusCount: () => {},
};

type CounterContextProps = typeof contextInitValue;

const CounterContext = createContext<CounterContextProps>(contextInitValue);

export const CounterProvider = ({ children }: PropsWithChildren) => {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount((preCount) => preCount + 1);
  };

  const minusCount = () => setCount((preCount) => preCount - 1);

  return (
    <CounterContext.Provider value={{ count, plusCount, minusCount }}>
      {children}
    </CounterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCounter = () => useContext(CounterContext);

export const useCount = (defVal = 0) => {
  const [count, setCount] = useState(defVal);
  const plusCount = (flag = 1) => setCount((pre) => pre + flag);
  return [count, plusCount];
};
