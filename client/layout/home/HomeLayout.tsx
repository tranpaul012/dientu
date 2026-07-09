import React from 'react';
import Sidebar from '../sidebar';
import Navbar from '../navbar';

type Props = { children: React.ReactNode };

function HomeLayout({ children }: Props) {
  return (
    <div className="p-1">
      <Navbar className=" theme-1 fixed  p-1 h-18 shadow-md top-0 left-0 w-full z-50" />
      <div className=" w-full  my-18  ">{children}</div>
      <Sidebar className=" theme-1  fixed  pb-4 px-4 pt-2 bottom-0 h-14 left-0 w-full shadow-md z-50" />
    </div>
  );
}

export default HomeLayout;
