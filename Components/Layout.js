import React, { Children } from "react";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import {Banner} from "./Banner"
import {About} from "./About"
import {Technologies} from "./Technologies"
import {Porfolio} from "./Portfolio"
import {Contact} from "./Contact"
export const Layout = () => {
  return (
    <div>
      <>
        <NavBar />
        <Banner />
        <Technologies />
        <Porfolio />
        <About/>
        <Contact />
      </>
    </div>
  );
};
