import React from 'react';

type Props = { children: React.ReactNode };

export default function Developer({ children }: Props) {
  return (
    <div>
      <h1>this is layout Developer</h1>
      {children}
    </div>
  );
}
