import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Admin = ({ children }: Props) => {
  return (
    <div className="">
      <h1>this is layout Admin</h1>
      {children}
    </div>
  );
};

export default Admin;
