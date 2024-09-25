import { useRef } from 'react';
import Hello, { MyHandler } from './components/Hello';
import My from './components/My';
import { SessionProvider } from './hooks/session-context';

function App() {
  const myHandleRef = useRef<MyHandler>(null);
  return (
    <div className='mt-5 flex flex-col items-center'>
      <SessionProvider>
        <Hello age={29} ref={myHandleRef} />
        <hr />
        <My />
      </SessionProvider>
      {/* <h1 className='text-4xl text-red-400'>DOHEE'S BOARD</h1>
      <Hello
        name='Dohee'
        age={29}
        count={count}
        ref={myHandleRef}
      />
      <hr />
      <pre>{JSON.stringify(session.loginUser)}</pre>
      <My
        session={session}
        logout={logout}
        login={login}
        removeCartItem={removeCartItem}
        addCartItem={addCartItem}
        ref={loginRef}
      />
      <div className='card'>
        <button
          onClick={() => {
            plusCount;
            if (session.loginUser) session.loginUser.name = 'XXX' + count;
            console.table(session.loginUser);
            myHandleRef.current?.jumpHelloState();
          }}
          className='btn btn'
        >
          count is {count} 으갸갸
        </button>
      </div> */}
    </div>
  );
}

export default App;
