import { FaPlus } from 'react-icons/fa6';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import Button from './atoms/Button.tsx';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context.tsx';
import Item from './Item.tsx';
import useToggle from '../hooks/toggle.ts';
import { useDebounce, useTimeout } from '../hooks/timer.ts';
import { FaSearch } from 'react-icons/fa';

export default function My() {
  const { session, toggleReloadSession } = useSession();
  const logoutButtonRef = useRef<HTMLButtonElement>(null);

  // const [isAdding, setIsAdding] = useState(false);
  // const toggleAdding = () => {
  //   setIsAdding((pre) => !pre);
  // };

  const [isAdding, toggleAdding] = useToggle();

  const [, toggleSearch] = useToggle();
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useDebounce(
    () => {
      console.log('useDebounce.search>>', searchRef.current?.value);
      setSearchTerm(searchRef.current?.value || '');
    },
    2000,
    [searchRef.current?.value]
  );

  const [ulHeight, setUlHeight] = useState(0);

  const ulCbRef = (node: HTMLUListElement) => {
    console.log('node>>', node, session.cart.length);
    setUlHeight(node?.clientHeight);
  };

  const totalPrice = useMemo(
    () => session.cart.reduce((acc, item) => acc + item.price, 0),
    [session.cart]
  );

  const dcPrice = useMemo(() => totalPrice * 0.1, [totalPrice]);

  useLayoutEffect(() => {
    // console.log('$$$$$$$$$$$$$$$$', totalPrice);
  }, [totalPrice]);

  let xxx = 0;
  // useEffect(() => {
  //   console.log('*******22');
  //   // alert('login plz...');

  //   return () => console.log('unmount22!!');
  // }, []);
  useTimeout(() => {
    xxx++;
  }, 1000);

  useEffect(() => {
    // const abortController = new AbortController();
    // const { signal } = abortController;
    // (async function () {
    //   try {
    //     const data = await fetch('/data/sample.json', { signal }).then((res) =>
    //       res.json()
    //     );
    //     console.log('My.data>>', data);
    //   } catch (error) {
    //     console.error('Error>>', error);
    //   }
    // })();
    // fetch('/data/sample.json', { signal })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log('data>>', data);
    //   })
    //   .catch((error) => console.error('Error>>', error));
    // return () => abortController.abort('Clean-up in My!');
  }, []);

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

      <div className='W-2/3 border p-3'>
        <div className='item-center flex gap-2'>
          <FaSearch />
          <input
            type='text'
            placeholder='찾을 품목을 검색하세요.'
            ref={searchTerm}
            onChange={toggleSearch} // 검색어 변경 시 상태 업데이트
            className='inp'
          />
        </div>
        <ul ref={ulCbRef} className='mt-3 px-3'>
          {session.cart?.length > 0 ? (
            session.cart
              .filter(({ name }) => name.includes(searchTerm))
              .map((item) => (
                <li key={item.id}>
                  <Item item={item} />
                </li>
              ))
          ) : (
            <li className='text-slate-500'>No results found</li>
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
      </div>

      <div className='mb-3 flex gap-5'>
        <span>*총액: {totalPrice.toLocaleString()}원</span>
        <span>*할인: {dcPrice.toFixed(0).toLocaleString()}원</span>
        <span>{ulHeight}</span>
      </div>
      <Button onClick={toggleReloadSession}>Reload Session</Button>
    </>
  );
}
