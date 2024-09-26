import { FaPlus } from 'react-icons/fa6';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import Button from './atoms/Button.tsx';
import { useRef } from 'react';
import { useSession } from '../hooks/session-context.tsx';
import Item from './Item.tsx';
import useToggle from '../hooks/toggle.ts';

export default function My() {
  const { session } = useSession();
  const logoutButtonRef = useRef<HTMLButtonElement>(null);

  /* const [isAdding, setIsAdding] = useState(false);
  const toggleAdding = () => {
    setIsAdding((pre) => !pre);//기존 값을 반대로 토글
  }; */
  const [isAdding, toggleAdding] = useToggle();

  return (
    <>
      {session.loginUser ? (
        <div className='flex gap-5'>
          <Profile ref={logoutButtonRef} />
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
              toggleAdding={toggleAdding}
            />
          ) : (
            <Button onClick={toggleAdding}>
              <FaPlus /> Add Item
            </Button>
          )}
        </li>
      </ul>
    </>
  );
}
