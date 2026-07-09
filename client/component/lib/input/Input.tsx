import { Dispatch, SetStateAction } from 'react';
import './input.css';

type Props<T> = {
  name: string;
  value?: string;
  attr: string;
  set_data: Dispatch<SetStateAction<T>>;
  message_error?: string;
};

function Input<T>({ name, value, attr, set_data, message_error }: Props<T>) {
  const handle_change = (e: React.ChangeEvent<HTMLInputElement>) => {
    set_data((prev) => ({ ...prev, [attr]: e.target.value }));
  };

  return (
    <div className="text-left">
      <div className="relative w-full mt-6 lib-input theme-1  rounded-md">
        <input
          id={attr}
          type="text"
          value={value ?? ''}
          onChange={handle_change}
          autoComplete="given-name"
          placeholder=" "
        />
        <label htmlFor={attr} className={message_error ? 'text-error' : 'text-success'}>
          {name}
        </label>
      </div>
      <span className="text-error text-xs">{message_error}</span>
    </div>
  );
}

export default Input;
