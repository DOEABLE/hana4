import { FaPlus, FaTrashCan } from 'react-icons/fa6';
import Login from './Login.tsx';
import Profile from './Profile.tsx';
import Button from './atoms/Button.tsx';
import { FormEvent, useRef, useState } from 'react';
import { FaRedo, FaSave } from 'react-icons/fa';
import { useSession } from '../hooks/session-context.tsx';
import { useCounter } from '../hooks/counter-hook.tsx';

export default function My() {
  const { session, removeCartItem, addCartItem } = useSession();
  const { plusCount } = useCounter();
  const [isEditing, setIsEditing] = useState(false);
  const logoutButtonRef = useRef<HTMLButtonElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const toggleEditing = () => {
    setIsEditing((pre) => !pre);
    plusCount();
  };
  const removeItem = (id: number) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      removeCartItem(id);
    }
  };
  const saveItem = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    const price = priceRef.current?.value;
    //console.log(name, price);
    if (!name) {
      alert('상품명을 입력하세요.');
      return nameRef.current?.focus();
    } else if (!price) {
      alert('금액을 입력하세요.');
      return priceRef.current?.focus();
    }

    addCartItem(name, +price);
    nameRef.current.value = '';
    priceRef.current.value = '';
    nameRef.current.focus();
  };

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

      <ul className='my-3 w-1/2 border p-3'>
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
        <li className='mt-3 text-center'>
          {isEditing ? (
            <form onSubmit={saveItem} className='mt-3 flex gap-3'>
              <input
                ref={nameRef}
                type='text'
                placeholder='이름을 입력하세요.'
                className='inp'
              />
              <input
                ref={priceRef}
                type='number'
                placeholder='가격을 입력하세요.'
                className='inp'
              />
              <Button type='reset' onClick={toggleEditing}>
                <FaRedo />
              </Button>
              <Button type='submit' variant='btn-primary'>
                <FaSave />
              </Button>
            </form>
          ) : (
            <Button onClick={toggleEditing}>
              <FaPlus /> Add Item
            </Button>
          )}
        </li>
      </ul>
    </>
  );
}
