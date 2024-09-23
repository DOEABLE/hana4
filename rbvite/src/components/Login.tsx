import { FormEvent, useRef } from 'react';
import Button from './atoms/Button';
import LabelInput from './molecules/LabelInput';

export default function Login({
  login,
}: {
  login: (id: number, name: string) => void;
}) {
  //const [id, setId] = useState(0);
  // const [name, setName] = useState('');
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const signIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = idRef.current?.value;
    const name = nameRef.current?.value;//value를 사용하기 위해 HTMLInputElement를 적어줘야함.
    if (!id || !name) {
      alert('id와 name을 입력해주세요.');
      return;
    }
    login(+id, name);
  };
  /* 바닐라js방식
   const signIn = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const eles = e.currentTarget.elements;
  const { id, name } = eles as typeof eles & {
    id: HTMLInputElement;
    name: HTMLInputElement;
  }; */

  // const changeName = (e: ChangeEvent<HTMLInputElement>) => {
  //   setName(e.currentTarget.value);
  // };

  return (
    <form onSubmit={signIn} className='rounded-md border p-2'>
      <LabelInput
        label='ID'
        type='number'
        ref={idRef}
        //onChange={(e) => setId(+e.currentTarget.value)}
      />
      {/* <div className='flex'>
        <label htmlFor='id' className='w-24'>
          ID:
        </label>
        <input
          id='id'
          type='number'
          placeholder='ID를 입력하세요.'
          className='inp mb-3'
          //onChange={(e) => setId(+e.currentTarget.value)}
        />
      </div> */}
      <div className='flex'>
        <label htmlFor='name' className='w-24'>
          Name:
        </label>
        <input
          id='name'
          type='text'
          ref={nameRef}
          autoComplete='off'
          placeholder='이름을 입력하세요.'
          className='inp'
          //onChange={changeName}
        />
      </div>
      {/* <LabelInput label='Name' type='text' onChange={changeName} /> */}
      {/* <button className='btn btn-success float-right m-3'>Sign In</button> */}
      <Button
        text='Sign In'
        variant='btn-success'
        classNames='float-right m-3'
      />
    </form>
  );
}
