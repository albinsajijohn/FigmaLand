import React from "react";
import Navbar from "../components/navbar";
import Homeintro from "../components/home/home-intro";
import Features from "../components/home/features";
import Contents from "../components/home/contents";
import Gallery from "../components/home/gallery";
import Partners from "../components/home/partners";
import Testimonials from "../components/home/testimonials";
import Freetrial from "../components/home/freetrial";
import Footer from "../components/home/footer";
export default function Home(){
    return(
        <div className="bg-black">
            <div className="bg-black">
                <Navbar />
                <Homeintro/>   
            </div>
            <div className="bg-[#181818]">   
                <Features />
                <Contents />
                <Gallery />
                <Partners />
                <Testimonials />
                <Freetrial />
                <Footer />
            </div>
        </div>
    );
    
}