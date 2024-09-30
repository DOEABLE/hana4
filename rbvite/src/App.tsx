import { useRef, useState } from 'react';
import Hello, { MyHandler } from './components/Hello';
import My from './components/My';
import { SessionProvider } from './hooks/session-context';

function App() {
  const [friend, setFriend] = useState(10);
  const myHandleRef = useRef<MyHandler>(null);

  return (
    <div className='mt-5 flex flex-col items-center'>
      <SessionProvider>
        <div className='mt-3 w-64'>
          <input
            type='number'
            defaultValue={friend}
            onChange={(e) => setFriend(+e.currentTarget.value)}
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
