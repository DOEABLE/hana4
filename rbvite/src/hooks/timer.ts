import { useCallback, useEffect, useRef } from 'react';

// export const useTimeout = <T extends (...args: Parameters<T>) => ReturnType<T>>(
//   cb: T,
//   delay: number,
//   ...args: Parameters<T>
// ) => {
//   const cbRef = useRef(cb);
//   const argsRef = useRef(args);
//   const timerRef = useRef<ReturnType<typeof setTimeout>>();

//   const setup = useCallback() => {
//     timerRef.current = setTimeout()
//   };
//   const clear = () => useCallback(clearTimeout(timerRef.current, []));
//   const reset = () => useCallback();
//   useEffect(() => {
//     timerRef.current = setTimeout(cbRef.current, delay, ...argsRef.current); //얘를 실행했다가 나가서 또 실행하면 배로 빨라진다.

//     return clear; //그래서 clearInterval로 이전에 실행했던 것을 clear(소멸) 해줘야함.
//   }, [cb, delay]);
// };
type TimerFn = typeof setTimeout | typeof setInterval;
type ClearFn = typeof clearTimeout | typeof clearInterval;

function useTimer<T extends (...args: Parameters<T>) => ReturnType<T>>(
  this: { timerFn: TimerFn; clearFn: ClearFn },
  cb: T,
  delay: number,
  ...args: Parameters<T>
) {
  const cbRef = useRef(cb);
  const argsRef = useRef(args);
  const timerRef = useRef<ReturnType<typeof this.timerFn>>();

  const { timerFn, clearFn } = this;
  const setup = useCallback(() => {
    timerRef.current = timerFn(cbRef.current, delay, ...argsRef.current);
  }, [delay, timerFn]);
  const clear = useCallback(() => clearFn(timerRef.current), [clearFn]);
  const reset = useCallback(() => {
    clear();
    setup();
  }, [clear, setup]);

  useEffect(() => {
    setup();
    return clear;
  }, [setup, clear]);

  return { reset, clear };
}
export const useTimeout = useTimer.bind({
  timerFn: setTimeout,
  clearFn: clearTimeout,
});

export const useInterval = useTimer.bind({
  timerFn: setInterval,
  clearFn: clearInterval,
});

export const useDebounce = <T extends (...args: unknown[]) => ReturnType<T>>(
  cb: T,
  delay: number,
  depArr: unknown[] = []
) => {
  const { reset, clear } = useTimeout(cb, delay);

  useEffect(() => {
    reset();
    return clear;
  }, [...depArr, delay]);
};

export const useDebounceX = <
  T extends (...args: Parameters<T>) => ReturnType<T>,
>(
  cb: T,
  delay: number,
  depArr: unknown[] = []
) => {
  const cbRef = useRef(cb);
  const timerRef = useRef<ReturnType<typeof setTimeout> | number>();

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(cbRef.current, delay);

    return () => clearTimeout(timerRef.current);
  }, [...depArr, delay]);
};
// export const useInterval = <
//   T extends (...args: Parameters<T>) => ReturnType<T>,
// >(
//   cb: T,
//   delay: number,
//   ...args: Parameters<T>
// ) => {
//   useEffect(() => {
//     const timer = setInterval(cb, delay, ...args);
//     return () => clearInterval(timer);
//   }, [cb, delay, args]);
// };
