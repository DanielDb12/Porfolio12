import React from "react";
import style from "../styles/About.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export const About = () => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    if (!isHover) {
      setIsHover(true);
    } else {
      setIsHover(false);
    }
  };

  return (
    <>
      <div id="about" className={style.container}>
        <div
          className={style.box}
          style={{
            marginTop: isHover ? "0" : "40rem",
            transition: " 0.8s ease-out",
          }}
        >
          <div className={style.content}>
            <Image
              className={style.imgen}
              src="/yo2.jpg"
              width="500"
              height="520"
              alt="yo"
            />
          </div>
        </div>

        <div
          className={`${style.card}`}
          onClick={handleMouseEnter}
          style={{
            height: isHover ? "800px" : "200px",
            transition: "0.8s ease-out",
          }}
        >
          <div className={style.title}>
            {" "}
            <h1>
              AB<span>UT</span>
            </h1>
          </div>
          <div className={style.lines}></div>

          <div
            className={style.about}
            style={{
              display: isHover ? "block" : "none",
              height: isHover ? "500px" : "0%",
              animation: "5s linear",
            }}
          >
            <p>
Hello my name is Daniel Duarte I am starting my career
 As a programmer, I've been watching and practicing tutorials on YouTube for a year
on the channels of Jhon Mircha, Fazt, FreeCodeCamp, Pildoras Informáticas, the aforementioned channels have been my university in this great world of computing.
              <br/><br/>
I have knowledge in the Front-End side of HTML, CSS, JS, React on the server side NodeJs, Mongo and MySql and additionally I manage a tool called Penpot for web designs.
              <br/><br/>
My goal is to continue learning, meet new people in the world of technology, help those who are entering this path for the first time.
            
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
