import { FaTrashCan } from 'react-icons/fa6';
import { Session } from '../App.tsx';
import Login from './Login.tsx';
import Profile from './Profile.tsx';

type Props = {
  session: Session;
  logout: () => void;
  login: (id: number, name: string) => void;
  //login: () => void;
  removeCartItem: (id: number) => void;
};
export default function My({ session, logout, login, removeCartItem }: Props) {
  const removeItem = (id: number) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      removeCartItem(id);
    }
  };

  return (
    <>
      {session.loginUser ? (
        <Profile session={session} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <ul className='my-3 w-1/3 border border-4 p-3'>
        {session.cart?.length ? (
          session.cart.map(({ id, name, price }) => (
            <li className='flex justify-between' key={id}>
              <strong>
                {id}. {name}
                <small className='text-gray-500'>
                  ({price.toLocaleString()}원)
                </small>
              </strong>
              <button
                className='btn btn-danger px-1 py-0'
                onClick={() => removeItem(id)}
              >
                <FaTrashCan />
              </button>
            </li>
          ))
        ) : (
          <li className='text-slate-500'>장바구니가 비었습니다.</li>
        )}
      </ul>
    </>
  );
}
