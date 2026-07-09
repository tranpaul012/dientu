import { HomeLayout } from '@/layout/home';
import React from 'react';

type Props = { children?: React.ReactNode };

function page({}: Props) {
  return (
    <HomeLayout>
      <div className="  ">
        <h1 className="">this is Home page</h1>
      </div>
    </HomeLayout>
  );
}
export default page;
