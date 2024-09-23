import { ChangeEvent, InputHTMLAttributes, RefObject, useId } from 'react';

type Props = {
  label: string;
  type?: string;
  placeHolder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  ref?: RefObject<HTMLInputElement> | null;
  classNames?: string;
  inputAttrs?: InputHTMLAttributes<HTMLInputElement>;
};

export default function LabelInput({
  label,
  inputAttrs,
  type = 'text',
  placeHolder = `${label}...`,
  onChange = () => {},
  classNames = '',
}: Props) {
  const id = useId();
  return (
    <div className='my-3 flex'>
      <label htmlFor={id} className='w-24'>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeHolder}
        className={`inp ${classNames}`}
        onChange={onChange}
        {...inputAttrs}
        ref={ref}
      />
    </div>
  );
}
