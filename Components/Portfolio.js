import style from "../styles/Porfolio.module.css";
import Link from "next/link";
import Image from "next/image";
export const Porfolio = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.background}></div>
        <h1>Porfolio</h1>

        <div className={style.team}>
          <ul className={`${style.autogrid} role="list"`}>
            {/*
            <li>
              <Link href="/" className={style.profile}>
                <h2>Proyect1</h2>
                <p>Founder</p>
                <Image
                  src="/Proyects/proyec1.jpg"
                  className={style.imgen}
                  width="300"
                  height="300"
                  alt="proyect1"
                />
              </Link>
            </li>
            <li>
              <Link href="/" className={style.profile}>
                <h2>Proyect2</h2>
                <p>Founder</p>
                <Image
                  src="/Proyects/proyec2.jpg"
                  className={style.imgen}
                  width="300"
                  height="300"
                  alt="proyect2"
                />
              </Link>
            </li>
 <li>
              <Link href="/" className={style.profile}>
                <h2>Proyect3</h2>
                <p>Founder</p>
                <Image
                  src="/Proyects/proyect3.jpg"
                  className={style.imgen}
                  width="300"
                  height="300"
                  alt="proyect3"
                />
              </Link>
            </li>
 <li>
              <Link href="/" className={style.profile}>
                <h2>Proyect4</h2>
                <p>Founder</p>
                <Image
                  src="/Proyects/proyect4.png"
                  className={style.imgen}
                  width="300"
                  height="300"
                  alt="proyect3"
                />
              </Link>
            </li>
 <li>
              <Link href="/" className={style.profile}>
                <h2>Proyect4</h2>
                <p>Founder</p>
                <Image
                  src="/Proyects/proyect4.png"
                  className={style.imgen}
                  width="300"
                  height="300"
                  alt="proyect3"
                />
              </Link>
            </li>
 <li>
              <Link href="/" className={style.profile}>
                <h2>Proyect4</h2>
                <p>Founder</p>
                <Image
                  src="/Proyects/proyect4.png"
                  className={style.imgen}
                  width="300"
                  height="300"
                  alt="proyect3"
                />
              </Link> 
            </li>
            */}

          </ul>
        </div>
      </div>
    </>
  );
};
