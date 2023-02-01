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
              Hola mi nombre es Daniel Duarte estoy comenzando con mi carrera
              como programador, me encanta todo lo que tenga que ver con
              programar, me parece fantástico de como una idea se puede plasmar
              en grandes herramientas que puedan ayudar a otras personas y eso
              lo que me trajo a este camino.
              <br/>
              Me considero una persona
              emprendedoras, con hambre de aprender y de conocer personas qué
              sumen un gran valor en esta comunidad, siempre trato de ayudar,
              aunque no sé si eso será una debilidad de mi parte, pero siempre
              he considerado que "hay que dejar mejor el mundo de como lo
              encontramos" una frase celebre de Baden Powell.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
