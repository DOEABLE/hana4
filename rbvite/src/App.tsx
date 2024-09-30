import { useRef, useState } from 'react';
import Hello, { MyHandler } from './components/Hello';
import My from './components/My';
import { SessionProvider } from './hooks/session-context';
// import { useDebounce } from './hooks/timer';
import useToggle from './hooks/toggle';
import { useDebounce } from './hooks/timer';

function App() {
  const [friend, setFriend] = useState(10);
  const [, toggleReRender] = useToggle();
  const myHandleRef = useRef<MyHandler>(null);

  const friendRef = useRef<HTMLInputElement>(null);
  useDebounce(
    () => {
      console.log('useDebounce>>', friendRef.current?.value);
      setFriend(+(friendRef.current?.value || 0));
    },
    1000,
    [friendRef.current?.value]
  );
  return (
    <div className='mt-5 flex flex-col items-center'>
      <SessionProvider>
        <div className='mt-3 w-64'>
          <input
            type='number'
            defaultValue={friend}
            //onChange={(e) => setFriend(+e.currentTarget.value)}
            onChange={toggleReRender}
            ref={friendRef}
            placeholder='friend id...'
            className='inp'
          />
        </div>
        <Hello friend={friend} ref={myHandleRef} />
        <hr />
        <My />
      </SessionProvider>
    </div>
  );
}

export default App;
