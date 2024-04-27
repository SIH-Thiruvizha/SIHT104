import React from "react";
import HeroSection from "./HeroSection";
import About from "../About/About";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";

function Home(){
    return(
        <div>
            <HeroSection/>
            <About/>
            <Services/>
            <Footer/>
        </div>
    )
}
export default Home;