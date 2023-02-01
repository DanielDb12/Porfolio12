import style from "../styles/Tecnologies.module.css";
import Image from "next/image";

export const Technologies = () => {
  return (
    <>
      <div id="technologie" className={style.container}>
        <div className={style.background}>
          <div className={style.title}><h2>Tecnologies</h2></div>

          <div className={style.circuit}>
            <Image
              src="/TECNOLOGY/Circuit.svg"
              width="700"
              height="700"
              alt="circuit"
            />
          </div>
          <div className={style.number}>
            <div className={style.one}>
              <Image
                src="/TECNOLOGY/01.svg"
                width="300"
                height="300"
                alt="01"
                className={style.imgone}
              />

              <div className={style.content}>
                <Image
                  src="/TECNOLOGY/iconfront.svg"
                  alt="iconfront"
                  width="100"
                  height="100"
                  className={style.iconnfront}
                />

                <div className={style.text}>
                  <h2>Front-End</h2>
                  <div>
                    <p>
                      Html.
                      <br/>
                      Css.
                      <br/>
                      Js.
                      <br/>
                      Boostrap.
                      <br/>
                      React
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.two}>
              <Image
                src="/TECNOLOGY/02.svg"
                className={style.imgtwo}
                width="300"
                height="300"
                alt="02"
              />

              <div className={style.content}>
                <div className={style.icon}>
                  {" "}
                  <Image
                    src="/TECNOLOGY/iconbackend.svg"
                    className={style.iconback}
                    width="100"
                    height="100"
                    alt="iconbackend"
                  />
                </div>

                <div className={style.text}>
                  <h2>Backend</h2>
                  <div>
                    <p>
                      NodeJs
                      <br/>
                      MySql
                      <br/>
                      MondoDB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.three}>
              <Image
                src="/TECNOLOGY/03.svg"
                className={style.imgthree}
                alt="03"
                width="300"
                height="300"
              />

              <div className={style.content}>
                <div className={style.icon}>
                  <Image
                    src="/TECNOLOGY/icondesigner.svg"
                    alt="icondesigner"
                    className={style.icondesign}
                    width="100"
                    height="100"
                  />
                </div>

                <div className={style.text}>
                  <h2>Web Designer</h2>
                  <div>
                    <p>
                      Penpot
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
