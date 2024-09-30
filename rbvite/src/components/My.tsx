import { FaPlus } from 'react-icons/fa6';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import Button from './atoms/Button.tsx';
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useSession } from '../hooks/session-context.tsx';
import Item from './Item.tsx';
import useToggle from '../hooks/toggle.ts';
import { useTimeout } from '../hooks/timer.ts';

export default function My() {
  const { session, toggleReloadSession } = useSession();
  const logoutButtonRef = useRef<HTMLButtonElement>(null);

  //   const [isAdding, setIsAdding] = useState(false);
  //   const toggleAdding = () => {
  //     setIsAdding((pre) => !pre);//기존 값을 반대로 토글
  //   };
  const [isAdding, toggleAdding] = useToggle();
  /*
  useEffect(() => {
     const abortController = new AbortController();
    fetch('/data/sample.json', { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log('data>>', data);
      })
      .catch((error) => console.error(error));

    return () => abortController.abort('clean-up!');
  }, []);*/

  const totalPrice = useMemo(
    () => session.cart.reduce((acc, item) => acc + item.price, 0),
    [session.cart]
  );

  const dcPrice = useMemo(() => totalPrice * 0.1, [totalPrice]);

  useLayoutEffect(() => {}, [totalPrice]);

  let xxx = 0;
  useTimeout(() => {
    xxx++;
  }, 1000);

  useEffect(() => {}, []);

  return (
    <>
      {session.loginUser ? (
        <div className='flex gap-5'>
          <Profile ref={logoutButtonRef} xxx={xxx} />
          <Button onClick={() => logoutButtonRef.current?.focus()}>
            MySignOut
          </Button>
        </div>
      ) : (
        <Login />
      )}

      <ul className='my-3 w-2/3 border p-3'>
        {session.cart?.length ? (
          session.cart.map((item) => (
            <li key={item.id}>
              <Item item={item} />
            </li>
          ))
        ) : (
          <li className='text-slate-500'>There is no items.</li>
        )}
        <li className='mt-3 text-center'>
          {isAdding ? (
            <Item
              item={{ id: 0, name: '', price: 0 }}
              toggleAdding={() => toggleAdding()}
            />
          ) : (
            <Button onClick={toggleAdding}>
              <FaPlus /> Add Item
            </Button>
          )}
        </li>
      </ul>
      <div className='mb-3 flex gap-5'>
        <span>*총액: {totalPrice.toLocaleString()}원</span>
        <span>*할인: {dcPrice.toFixed(0).toLocaleString()}원</span>
      </div>
      <Button onClick={toggleReloadSession}>ReloadSession</Button>
    </>
  );
}
