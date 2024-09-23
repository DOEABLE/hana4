import { useState } from 'react';
import Hello from './components/Hello';
import My from './components/My';

const SampleSession = {
  loginUser: { id: 1, name: 'Hong' },
  cart: [
    { id: 100, name: '라면', price: 3000 },
    { id: 101, name: '컵라면', price: 2000 },
    { id: 200, name: '파', price: 5000 },
  ],
};

type LoginUser = typeof SampleSession.loginUser;
type CartItem = { id: number; name: string; price: number };
export type Session = { loginUser: LoginUser | null; cart: CartItem[] };

function App() {
  const [count, setCount] = useState(0);
  const [session, setSession] = useState<Session>(SampleSession);

  const plusCount = () => {
    //setCount(count + 1) -> 이렇게 두번 적어도 count는 innerText에서 아직 처리가 안되므로 1씩증가됨을 보인다.
    setCount((count) => count + 1); //이렇게 두번 적으면 2씩증가 가능
    setCount((pre) => {
      //브라우저 console에서도 2씩증가되며 출력됨.
      const newer = pre + 1;
      console.log(newer, count);
      return newer;
    });
    const cnt = document.getElementById('cnt');
    console.log(count, cnt?.innerText);
  };

  const minusCount = () => setCount((count) => count - 1);

  const login = (id: number, name: string) =>
    setSession({ ...session, loginUser: { id, name } });

  const logout = () => setSession({ ...session, loginUser: null });
  /* const logout = () => {
      session.loginUser = null;
      setSession(session);
    }; */

  const removeCartItem = (toRemoveId: number) => {
    // patten 1)
    // session.cart = session.cart.filter(({ id }) => id !== toRemoveId);
    // setSession({ ...session });

    // patten 2)
    setSession({
      ...session,
      cart: session.cart.filter(({ id }) => id !== toRemoveId),
    });
  };

  return (
    <div className='mt-5 flex flex-col items-center'>
      <h1 className='text-4xl text-red-400'>DOHEE'S BOARD</h1>
      <Hello
        name='Dohee'
        age={29}
        count={count}
        plusCount={plusCount}
        minusCount={minusCount}
      />
      <hr />
      <pre>{JSON.stringify(session.loginUser)}</pre>
      <My
        session={session}
        logout={logout}
        login={login}
        removeCartItem={removeCartItem}
      />
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 1);
            if (session.loginUser) session.loginUser.name = 'XXX' + count;
            console.table(session.loginUser);
          }}
          className='btn btn'
        >
          count is {count} 으갸갸
        </button>
      </div>
    </div>
  );
}

export default App;
