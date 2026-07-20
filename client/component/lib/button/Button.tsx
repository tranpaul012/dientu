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

const Button = ({ type = 'button', children, link, className, icon, onSubmit }: Props) => {
  const content = (
    <div
      className={
        'flex items-center justify-center bg-primary-1 hover:bg-primary-2 cursor-pointer p-1 rounded-lg text-white ' +
        (className ?? '')
      }
    >
      {icon && <span className="material-symbols-outlined">{icon}</span>}
      <span>{children ?? type}</span>
    </div>
  );

  if (link) {
    return <Link href={link}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onSubmit} className={className}>
      {content}
    </button>
  );
};

export default Button;
