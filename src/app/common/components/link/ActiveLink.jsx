"use client";
import styles from './ActiveLink.module.scss';


import { usePathname } from "next/navigation";
import Link from "next/link";

const ActiveLink = ({ href, children, className, activeClassName }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? activeClassName : ""}`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
