import react from "react";
import Link from "next/link";
import style from "../styles/Navbar.module.css";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className={style.container}>
          <Link href="/">Daniel</Link>

          <ul className={style.list}>
            <li className={style.listItem}>
              <Link href="/">Home</Link>
            </li>
             <li className={style.listItem}>
               <Link href="/#technologie">Technologies</Link>
            </li>
            
            <li className={style.listItem}>
              <Link href="/#about">About</Link>
            </li>
            <li className={style.listItem}>
              <Link href="/#portfolio">Portfolio</Link>
            </li>
            <li className={style.listItem}>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>

          <div className={style.hamburger} onClick={() => setOpen(!open)}>
            <div className={style.line} />
            <div className={style.line} />
            <div className={style.line} />
          </div>

          <ul
            onClick={() => setOpen(false)}
            className={style.menu}
            style={{ right: open ? "0px" : "-50vw" }}
          >
            <li className={style.menuItem}>
              <Link href="/">Home</Link>
            </li>
             <li className={style.menuItem}>
               <Link href="/#technologie">Technologies</Link>
            </li>
            
            <li className={style.menuItem}>
              <Link href="/#about">About</Link>
            </li>
            <li className={style.menuItem}>
              <Link href="/#portfolio">Portfolio</Link>
            </li>
            <li className={style.menuItem}>
              <Link href="/#contact">Contact</Link>
            </li>


          </ul>
        </div>
      </nav>
    </>
  );
};
