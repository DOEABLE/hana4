import { ChangeEvent, ForwardedRef, forwardRef, InputHTMLAttributes, RefObject, useId } from 'react';

type Props = {
  label: string;
  type?: string;
  placeHolder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  ref?: RefObject<HTMLInputElement> | null;
  classNames?: string;
  inputAttrs?: InputHTMLAttributes<HTMLInputElement>;
};

function LabelInput({
  label,
  inputAttrs,
  type = 'text',
  placeHolder = `${label}...`,
  onChange = () => {},
  //ref=null,
  classNames = '',
  
}: Props, ref: ForwardedRef<HTMLInputElement>|null) {
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
const LabelInputRef = forwardRef(LabelInput);
export default LabelInputRef;