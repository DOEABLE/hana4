import { ReactNode, useState } from 'react';

type TitleProps = {
  text: string;
  name: string;
};
const Title = ({ text, name }: TitleProps) => {
  //console.log("ddd");
  return (
    <h1>
      {text} {name}
    </h1> //함수형 component
  );
};

const Body = ({ children }: { children: ReactNode }) => {
  //children(prop)은 조작하지 말자.
  //console.log('booooooooooooooooooood!!');
  return (
    <div className='red' style={{ color: 'blue' }}>
      {children}
    </div>
  );
};

/* function useState<S>(initValueOrFn) {
  const state = {
    _state: initValueOrFn,
    get state() {
      return this._state;
    },
    setState(x: S) {
      this._state = x;
      vdom.trigger(this);
    }
  }
  return [state.state, state.setState];
} */

type Props = {
  name: string;
  age: number;
  count: number;
  plusCount: () => void;
  minusCount: () => void;
};

export default function Hello({
  name,
  age,
  count,
  plusCount,
  minusCount,
}: Props) {
  //const [myState, setMyState] = useState(() => new Date().getTime());
  const [myState, setMyState] = useState(0);
  let v = 1;
  //hello라는 component가 외부에 export(component 하나를 뜻함.)
  console.debug('******', v, myState, count);

  return (
    <div className='mt-5 border border-green-900 border-slate-300 p-4 text-2xl text-blue-300'>
      <Title text='Hi~ In Hello.tsx! My Name:' name={name} />
      {/* title은 component, component는 함수. */}
      <Body>
        This is Hello Component. {v}-{myState} - {age}
      </Body>
      <button
        onClick={() => {
          v++;
          setMyState((myState) => myState + 1);
          plusCount();
          /* console.log('v=', v, myState); */
        }}
        className='btn'
      >
        plusBtn꾸욱
      </button>
      <strong className='mx-5'>{count}</strong>
      <button onClick={() => minusCount()} className='btn btn-danger'>
        Minus
      </button>
    </div>
  );
}
