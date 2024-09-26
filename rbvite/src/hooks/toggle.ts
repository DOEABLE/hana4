import { useState } from 'react';

export default function useToggle(defVal: boolean = false) {
  const [state, setState] = useState(defVal);

  const toggle = () => setState((pre) => !pre);
  return [state, toggle] as const; //const를 쓰기전엔 boolean이거나 [] 쓴 후에는 type이 tuple이 되게 됨.
}
