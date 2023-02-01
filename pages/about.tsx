import React from "react"; 
import { NavBar } from "../Components/NavBar";
import { About } from "../Components/About";

import { Footer } from "../Components/Footer";
import {Banner} from "../Components/Banner"
import {Technologies} from "../Components/Technologies"
import {Porfolio} from "../Components/Portfolio"
import {Contact} from "../Components/Contact"

const about = () => {

  return(
    <>
      <NavBar />  
    <About />
      </>
      )

}

export default about;
