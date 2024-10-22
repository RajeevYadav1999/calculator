import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import slide_image_1 from '../FormingTypes/img/1.jpg';
import slide_image_2 from '../FormingTypes/img/2.jpg';
import slide_image_3 from '../FormingTypes/img/3.jpg';
export default function App() {
  return (
    <>
      <ul className='mae-drawing-slider-navbar-ul'>
        <div className='mae-drawing-slider-nav-logo-left'>
          <li className='mae-drawing-slider-nav-logo'>Lab</li>
        </div>
        <div className='mae-drawing-slider-nav-topic-right'>
          <li className='mae-drawing-slider-nav-topics'>Topic1</li>
          <li className='mae-drawing-slider-nav-topics'>Topic2</li>
          <li className='mae-drawing-slider-nav-topics'>Topic3</li>
          <li className='mae-drawing-slider-nav-topics'>Topic4</li>
        </div>
      </ul>
      <div className='main-background'>
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <br />
        <Swiper watchSlidesProgress={true} slidesPerView={3} className="mySwiper" loop={true}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <SwiperSlide className=' mae-drawing-slider-slide-1'>
            <img src={slide_image_1} alt="slide_image" />
            <div>
              <p><strong>Hot forging</strong></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=' mae-drawing-slider-slide-1'>
            <img src={slide_image_2} alt="slide_image" />
            <div>
              <p><strong>Warm forging</strong></p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='mae-drawing-slider-slide-1'>            
            <img src={slide_image_3} alt="slide_image" />
            <div>
              <p><strong>Cold forging</strong></p>
              <p>Reshaping of metal when it is heated at or below the room temperature (below the recrystallization temperature).  Preferred for the metal that is already soft like aluminum.
                Provide high dimensional accuracy, good surface roughness, and high production efficiency. Cold forging can also replace machining sometimes. Cold forging can make metal reinforcement, improve the strength of parts and decrease ductility.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=' mae-drawing-slider-slide-1'>

          </SwiperSlide>
           {/*<SwiperSlide className=' mae-drawing-slider-slide-1'>
            <img src={slide_image_5} alt="slide_image" />
            <div>
              <p><strong>Dynamic Rear Steering (DRS)</strong></p>
              <p>DRS helps steer the rear wheels up to four degrees in the opposite or same direction as the front wheels, depending on vehicle speed. At low speeds, this feature vastly improves turning and maneuverability when cornering, and at high speeds, you enjoy excellent stability.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=' mae-drawing-slider-slide-1'>
            <img src={slide_image_6} alt="slide_image" />
            <div>
              <p><strong>Diverse Lineup of Powertrains</strong></p>
              <p>We offer a variety of powertrains to suit your lifestyle. The lineup includes the RX 500h (2.4-liter turbocharged inline-four hybrid system), the RX 450h+ (2.5-liter inline-four plug-in hybrid system), the RX 350h (2.5-liter inline-four hybrid system), and the RX 350 (2.4-liter turbocharged inline-four).</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className=' mae-drawing-slider-slide-1'>
            <img src={slide_image_7} alt="slide_image" />
            <div>
              <p><strong>Lexus Safety System+</strong></p>
              <p>The latest Lexus Safety System+ comes with expanded functions for better protection. Features include Pre-Collision System, Lane Departure Alert, and Dynamic Radar Cruise Control.</p>
            </div>
          </SwiperSlide> */}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </Swiper>
      </div>
    </>
  );
}
