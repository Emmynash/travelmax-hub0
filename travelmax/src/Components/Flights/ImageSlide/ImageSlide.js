import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Lagos from '../../../Assets/Images/Slider/most_visited/Lagos.png';
import Durban from '../../../Assets/Images/Slider/most_visited/Durban.jpg';
import AkwaIbom from '../../../Assets/Images/Slider/most_visited/Akwa-Ibom.jpg';
import Dubai from '../../../Assets/Images/Slider/most_visited/Dubai.jpg';
import Kano from '../../../Assets/Images/Slider/most_visited/Kano.jpg';
import Jos from '../../../Assets/Images/Slider/most_visited/Jos.jpg';
import Chicago from '../../../Assets/Images/Slider/most_visited/Chicago.jpg';
import MagicalMiami from '../../../Assets/Images/Slider/most_visited/Magical_Miami.jpg';
import Emirates from '../../../Assets/Images/Slider/most_visited/Emirates.jpg';
import QatarWashington from '../../../Assets/Images/Slider/most_visited/QatarWashington.jpg';
import Guangzhou from '../../../Assets/Images/Slider/most_visited/Guangzhou.jpg';



const slideShow = () => (
  <Carousel autoPlay>
    <div>
      <img alt="Slider(0)" src={Lagos} />
      <p className="legend">Lagos, Nigeria</p>
    </div>
    <div>
      <img alt="Slider(1)" src={AkwaIbom} />
      <p className="legend">Akwa Ibom, Nigeria</p>
    </div>
    <div>
      <img alt="Slider(2)" src={Dubai} />
      <p className="legend">Dubai</p>
    </div>
    <div>
      <img alt="Slider(3)" src={Kano} />
      <p className="legend">Kano, Nigeria</p>
    </div>
    <div>
      <img alt="Slider(4)" src={Jos} />
      <p className="legend">Jos, Nigeria</p>
    </div>
     <div>
      <img alt="Slider(5)" src={Durban} />
      <p className="legend">Durban, South Africa</p>
    </div>
    <div>
      <img alt="Slider(6)" src={MagicalMiami} />
      <p className="legend">Magical Miami, USA</p>
    </div>
    <div>
      <img alt="Slider(7)" src={Guangzhou} />
      <p className="legend">Guangzhou,China</p>
    </div>
    <div>
      <img alt="Slider(8)" src={Emirates} />
      <p className="legend">Emirates, Middle East</p>
    </div>
    <div>
      <img alt="Slider(9)" src={Chicago} />
      <p className="legend">Chicago, USA</p>
    </div>
    <div>
      <img alt="Slider(10)" src={QatarWashington} />
      <p className="legend">Washington, USA</p>
    </div>
  </Carousel>
);


export default slideShow;