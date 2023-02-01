import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import style from "../styles/Banner.module.css";
import Link from "next/link";


const sizes = {
  sm:'640px',
  md:'768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px'
}


const useMediaQuery = (screen) => {
  const [matche,setMatches] = useState(false)


  useEffect(() => {
    const query = `min-width: ${sizes[screen]}`;
    const media = window.matchMedia(query)


    if(media.matche !== matche){
setMatches(media.matche)
    }

    const listener = setMatches(media.matche);
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener)


  }, [matche, screen])

return matche
}



export const Banner = () => {



  const isDesktop = useMediaQuery('lg')

  return (
    <>
      <div className={style.container}>
        <div className={style.background}>
          <div className={style.pc}>
            <div className={style.ilumination}></div>
              <div className={`${style.figure1} ${isDesktop}`} >
              <Image
                src="/Banner/figure1.svg"
                className={`${style.figure1} base ${isDesktop ? "desktop" : "mobile"}`}
                 
                width="800"
                height="800"
                alt="figure1"

              />
            </div>

            <Image
              src="/Banner/pc1.png"
              className={style.pc}
              width="1500"
              height="1500"
              alt="pc2"
                         />
          </div>
          <div className={style.figure2}>
            <Image
              src="/Banner/figure2.svg"
              className={style.figure2}
              width="500"
              height="500"
              alt="figure2"
            />
          </div>
          <div className={style.icons}>
            <div>
              <Link href="https://github.com/DanielDb12" target="_blank">
              <Image
                src="/Banner/icons/github.png"
                className={style.git}
                width="50"
                height="50"
                alt="github"

              />
                </Link>
            </div>
            <div>
              <Link href="https://www.linkedin.com/in/daniel-duarte-588944234/" target="_blank">
              <Image
                src="/Banner/icons/in.png"
                className={style.in}
                width="50"
                height="50"
                alt="in"
              />
                </Link>
            </div>
            <div>
              <Link href="/" target="_blank">
              <Image
                src="/Banner/icons/twitter.png"
                className={style.twitter}
                width="50"
                height="45"
                alt="twitter"
              />
                </Link>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.text}>
              <h1>
                I'm Daniel <br />
                <span className={style.typewriter}></span>
              </h1>
            </div>
            
            <div className={style.btn}>
              <Link href="pdf" target="_blank"><button>Curriculum</button></Link>

            </div>
          
          </div>

       </div>
      </div>
    </>
  );
};
