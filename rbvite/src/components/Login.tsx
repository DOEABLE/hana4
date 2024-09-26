import {
  FormEvent,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
} from 'react';
import Button from './atoms/Button';
import LabelInput from './molecules/LabelInput';
import { useSession } from '../hooks/session-context';
import { useCounter } from '../hooks/counter-hook';

export type LoginHandler = {
  focus: (prop: string) => void;
};

export default function Login() {
  const { login, loginRef } = useSession();
  const { count, plusCount, minusCount } = useCounter();
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const handler: LoginHandler = {
    focus(prop) {
      if (prop === 'id') idRef.current?.focus();
      if (prop === 'name') nameRef.current?.focus();
    },
  };
  useImperativeHandle(loginRef, () => handler);

  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idRef.current?.value ?? 0;
    const name = nameRef.current?.value ?? '';
    login(+id, name);
  };

  /* useEffect(() => {
    const intl = setTimeout((x) => console.log('xx', x), 500, 123); //얘를 실행했다가 나가서 또 실행하면 배로 빨라진다.
    return clearTimeout(intl); //그래서 clearInterval로 이전에 실행했던 것을 clear(소멸) 해줘야함.
  }, []);

  useTimeout(
    (y) => {
      console.log('useTimeout!!', y);
    },
    500,
    999
  ); */

  useLayoutEffect(() => {
    // console.log('useLayoutEffect!!');
  }, []);

  useEffect(() => {
    console.log('useEffect1', count);
    plusCount();
    return () => {
      console.log('!!!', count);
      minusCount();
    };
  }, [count, plusCount, minusCount]);

  /* useEffect(() => {
    return minusCount; //소멸 시, -1
  }, [minusCount]); */

  return (
    <>
      <form onSubmit={signIn} className='border p-4'>
        <LabelInput
          label='ID'
          type='number'
          ref={idRef}
          // onChange={(e) => setId(+e.currentTarget.value)}
        />
        <div className='flex'>
          <label htmlFor='name' className='w-24'>
            Name:
          </label>
          <input
            id='name'
            type='text'
            ref={nameRef}
            placeholder='Name...'
            className='inp'
            // onChange={changeName}
          />
        </div>
        {/* <div className='flex'>
        <label htmlFor='id' className='w-24'>
          ID:
        </label>
        <input
          id='id'
          type='number'
          placeholder='ID...'
          className='inp mb-3'
          // onChange={(e) => setId(+e.currentTarget.value)}
        />
      </div> */}
        {/* <div className='flex'>
        <label htmlFor='name' className='w-24'>
          Name:
        </label>
        <input
          id='name'
          type='text'
          autoComplete='off'
          placeholder='Name...'
          className='inp'
          // onChange={(e) => setName(e.currentTarget.value)}
        />
      </div> */}
        {/* <button className='btn btn-success float-end mt-3'>Sign In</button> */}
        <Button type='submit' variant='btn-success' classNames='float-end mt-3'>
          Sign In
        </Button>
      </form>
    </>
  );
}
