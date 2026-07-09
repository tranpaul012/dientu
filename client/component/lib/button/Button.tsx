import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';
import { Status } from '@/component/lib/type';

type Props = {
  status?: Status;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  link?: string;
  className?: string;
  onSubmit?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};

const Button = ({ type, children, link, className, icon, onSubmit }: Props) => {
  return (
    <button type={type} onClick={onSubmit}>
      <Link href={link ?? ''}>
        <div
          className={
            'flex items-center justify-center bg-primary-1 hover:bg-primary-2 cursor-pointer p-1 rounded-lg text-white ' +
            className
          }
        >
          {icon && <span className="material-symbols-outlined  ">{icon}</span>}
          <span className="">{children ?? type ?? 'loading'}</span>
        </div>
      </Link>
    </button>
  );
};

export default Button;
