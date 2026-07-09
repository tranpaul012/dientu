import Link from 'next/link';
import React from 'react';

type Props = { children?: React.ReactNode; className?: string };

const listMenu = [
  { name: 'news', link: '/news', icon: 'newspaper' },
  { name: 'product', link: '/product', icon: 'store' },
  { name: 'contact', link: '/contact', icon: 'contact_page' },
  { name: 'about', link: '/about', icon: 'info' },
];
function Sidebar({ className }: Props) {
  return (
    <div className={`${className}`}>
      <ul className=" list-none w-full h-full  flex justify-between items-center gap-2">
        {listMenu.map((item) => (
          <Link key={item.name} href={item.link}>
            <li className=" text-xl text-primary-1 flex flex-col justify-center items-center cursor-pointer">
              <span className="material-symbols-outlined  ">{item.icon}</span>
              <span className="text-xs"> {item.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
