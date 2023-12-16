import WhatWeDo from "../components/Home/WhatWeDo";
import ManageProducts from "../components/Home/ManageProducts";
import StartYourJourney from "../components/Home/StartYourJourney";
import HeroSection from "../components/Home/HeroSection";
import Carousel from "../components/Home/Carousel";
import Slider from "../components/Home/Slider";
import OurServices from "../components/Home/OurServices";
import carouselPic1 from "../assets/Home/image1.jpeg";
import carouselPic2 from "../assets/Home/image2.jpeg";
import carouselPic3 from "../assets/Home/image3.jpeg";
import carouselPic4 from "../assets/Home/image4.jpeg";
import carouselPic5 from "../assets/Home/image5.jpeg";
import carouselPic6 from "../assets/Home/ultimate2.svg";
import "../css/contact.css";
import Footer2 from "../components/Footer2";
import { Services, Welcome } from "../components";

export default function Home() {
  const slides = [
    { image: carouselPic1 },
    { image: carouselPic2 },
    { image: carouselPic3 },
    { image: carouselPic4 },
    { image: carouselPic5 },
    { image: carouselPic6 },
  ];
  const containerStyles = {
    // width: '500px',
    // height: '280px',
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "100px",
  };
  return (
    <div className="">
      <div className="gradient-bg-services">
      <Welcome />
      </div>
      <Services />
      <div className="gradient-bg-transactions text-white">
        <div
          className="w-[350px] h-[190px] xs:w-[450px] xs:h-[250px] sm:w-[500px] sm:h-[280px] md:h-[620px] md:w-[700px] lg:w-[900px] xl:w-[1200px] 2xl:[1300px] pt-5"
          style={containerStyles}
        >
          <Carousel slides={slides} />
        </div>
        <WhatWeDo />
      </div>
      <div className="gradient-bg-footer">
        <ManageProducts />
      </div>
      <section id="contact" className="gradient-bg-services pb-16 contact flex justify-center">
        <div className="container">
          <header className="section-header pb-[40px]">
            <h2>Features</h2>
            <p>Our Features</p>
          </header>
          <Slider />
        </div>
      </section>
      <div className="pt-4 gradient-bg-transactions">
      <OurServices />
      </div>
      <div className="gradient-bg-footer pt-20">
        <StartYourJourney />
      </div>
      {/* <Footer2 /> */}
    </div>
  );
}
