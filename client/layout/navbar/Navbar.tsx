import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = { children?: React.ReactNode; className?: string };

function Navbar({ className }: Props) {
  const name = 'vuongdev';

  return (
    <div className={className}>
      <div className="w-full h-full flex justify-between items-center">
        <Link href="/">
          <div className="flex flex-col items-center">
            <Image
              src="/store.png"
              alt="logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <h1 className="text-sm">Điện tử</h1>
          </div>
        </Link>
        <div className="text-3xl  flex justify-center items-center text-primary-1 cursor-pointer">
          <span className="material-symbols-outlined  ">search</span>
        </div>

        <Link href="/cart">
          <div className=" text-primary-1 flex flex-col w-12 justify-center items-center cursor-pointer">
            <div className="text-3xl flex relative w-full">
              <span className="material-symbols-outlined ">shopping_bag</span>
              <span className="text-xs absolute top-0 right-0  theme-3 rounded-full w-5 h-5 flex items-center justify-center">
                12
              </span>
            </div>
            <span className="text-sm w-full">cart</span>
          </div>
        </Link>
        <Link href="/user">
          <div className=" text-primary-1 flex flex-col  justify-center items-center cursor-pointer">
            <div className="text-3xl  flex">
              <span className="material-symbols-outlined ">person</span>
            </div>
            <span className="text-sm">login/register</span>
          </div>
        </Link>
        <div className=" text-3xl text-primary-1  hidden justify-center items-center flex-col cursor-pointer">
          <div className="">
            <Image
              src="/vuongdev2508.png"
              alt="logo"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <span className="text-sm w-full line-clamp-2">
            {name.length > 7 ? name.slice(0, 7) + '...' : name}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
