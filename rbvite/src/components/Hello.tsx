import {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useState,
} from 'react';
import { useSession } from '../hooks/session-context';
import { useCounter } from '../hooks/counter-hook';
import { useFetch } from '../hooks/fetch-hook';
import { FaSpinner } from 'react-icons/fa6';

type TitleProps = {
  text: string;
  name?: string;
};

const Title = ({ text, name }: TitleProps) => {
  //console.log("ddd");
  return (
    <h1 className='text-3xl'>
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

// function useState<S>(initValueOrFn) {
//   const state = {
//     _state: initValueOrFn,
//     get state() {
//       return this._state;
//     },
//     setState(x: S) {
//       this._state = x;
//       vdom.trigger(this);
//     }
//   }
//   return [state.state, state.setState];
// }

type Props = {
  friend: number;
};

export type MyHandler = {
  jumpHelloState: () => void;
};

type PlaceUser = {
  id: number;
  name: string;
  username: string;
  email: string;
};

function Hello({ friend }: Props, ref: ForwardedRef<MyHandler>) {
  const {
    session: { loginUser },
  } = useSession();
  const { count, plusCount, minusCount } = useCounter();
  const [myState, setMyState] = useState(0); //myState를 바꿔주는 setMyState
  let v = 1;
  const handler: MyHandler = {
    jumpHelloState: () => setMyState((pre) => pre * 10),
  };
  useImperativeHandle(ref, () => handler);

  const {
    data: friendInfo,
    isLoading,
    error,
  } = useFetch<PlaceUser>(
    `http://jsonplaceholder.typicode.com/users/${friend}`,
    true,
    [friend]
  );
  return (
    <div className='mt-5 border border-green-900 border-slate-300 p-4 text-2xl text-blue-300'>
      <Title text='Hi~ In Hello.tsx! My Name:' name={loginUser?.name} />
      {/* title은 component, component는 함수. */}
      <Body>
        <h3 className='text-center text-2xl'>myState: {myState}</h3>
        {isLoading && (
          <h3 className='flex justify-center'>
            <FaSpinner size={20} className='animate-spin text-slate-500' />
          </h3>
        )}
        {error ? (
          <strong className='text-red-500'>
            {error.message && error.message.startsWith('404')
              ? `Your friend is not found(${friend})`
              : error.message}
          </strong>
        ) : (
          <div className='flex h-10 items-center justify-center rounded-lg shadow-[0_0_10px_purple]'>
            My friend is {friendInfo?.id}. {friendInfo?.username}.
          </div>
        )}
        <p>
          {v} - {friend}
        </p>
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

const ImpHello = forwardRef(Hello);
export default ImpHello;
