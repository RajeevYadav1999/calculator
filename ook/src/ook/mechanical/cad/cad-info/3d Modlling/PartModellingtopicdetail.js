import React, { useRef, useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import slide_image_1 from './img/1.jpg';
import slide_image_2 from './img/2.jpg';
import slide_image_3 from './img/3.jpg';
import slide_image_4 from './img/4.jpg';
import slide_image_5 from './img/5.jpg';
import slide_image_6 from './img/6.jpg';
import slide_image_7 from './img/7.jpg';
import './index.css'
export default function PartModellingtopicdetail() {

    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };
    return (
        <>
            <ul className='mae-drawing-slider-navbar-ul'>
            <div className='mae-drawing-slider-nav-logo-left'>
                    <li className='mae-drawing-slider-nav-logo'>Discover <BsArrowRight/></li>
                </div>
                <div className='mae-drawing-slider-nav-topic-right'>
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/3dModeling/partModlling/types/PartModelling'>Part Modelling</Link></li>
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/3dModeling/partModlling/types/PartModelling'>Weldments </Link></li>
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/3dModeling/partModlling/types/PartModelling'>Sheet Metal</Link></li>
                    <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/3dModeling/partModlling/types/PartModelling'>Surface Modelling</Link></li>
                    {/* <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types/Detail'>Detail</Link></li> */}
                    {/* <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types/Auxiliary'>Auxiliary</Link></li> */}
                </div>
            </ul>
            {/* <button onClick={toggleClass}>ghh</button> */}
            <div className='main-background'>
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide className={isActive ? 'mae-drawing-slider-slide-1 aligh-all' : ' mae-drawing-slider-slide-1'}>
              <img src={slide_image_1} alt="slide_image" />
              <div>
                <p><strong>Hot forging</strong></p>
                <p>Reshaping of metal when it is heated to a high temperature, typically above its recrystallization temperature, which reduces its strength and force required to change the shape and size.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={isActive ? 'mae-drawing-slider-slide-1 aligh-all' : ' mae-drawing-slider-slide-1'}>
              <img src={slide_image_2} alt="slide_image" />
              <div>
                <p><strong>Warm forging</strong></p>
                <p>The enhanced GA-K platform has a lightweight design with a low center of gravity. Multi-link suspension is adopted, and a rigid, high-torsion body frame is used. These improvements give the all-new RX excellent handling and a more linear steering response.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className={isActive ? 'mae-drawing-slider-slide-1 aligh-all' : ' mae-drawing-slider-slide-1'}>
              <img src={slide_image_3} alt="slide_image" />
              <div>
                <p><strong>Cold forging </strong></p>
                <p>A torque-filled turbocharged 2.4-liter hybrid electric engine, 6-speed automatic transmission, and high-power eAxle motor deliver a soul-stirring yet sustainable drive. Active Sound Control emphasizes engine sounds, enhancing the dialogue between vehicle and driver.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide  className={isActive ? 'mae-drawing-slider-slide-1 aligh-all' : ' mae-drawing-slider-slide-1'}>
              <img src={slide_image_4} alt="slide_image" />
              <div>
                <p><strong>DIRECT4</strong></p>
                <p> This next-generation electrified technology analyzes driving information to optimize the drive force distribution of the front and rear wheels for an invigorating and dynamic drive.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide  className={isActive ? 'mae-drawing-slider-slide-1 aligh-all' : ' mae-drawing-slider-slide-1'}>
              <img src={slide_image_5} alt="slide_image" />
              <div>
                <p><strong>Dynamic Rear Steering (DRS)</strong></p>
                <p>DRS helps steer the rear wheels up to four degrees in the opposite or same direction as the front wheels, depending on vehicle speed. At low speeds, this feature vastly improves turning and maneuverability when cornering, and at high speeds, you enjoy excellent stability.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide  className={isActive ? 'mae-drawing-slider-slide-1 aligh-all' : ' mae-drawing-slider-slide-1'}>
              <img src={slide_image_6} alt="slide_image" />
              <div>
                <p><strong>Diverse Lineup of Powertrains</strong></p>
                <p>We offer a variety of powertrains to suit your lifestyle. The lineup includes the RX 500h (2.4-liter turbocharged inline-four hybrid system), the RX 450h+ (2.5-liter inline-four plug-in hybrid system), the RX 350h (2.5-liter inline-four hybrid system), and the RX 350 (2.4-liter turbocharged inline-four).</p>
              </div>
            </SwiperSlide>
            <SwiperSlide  className={isActive ? 'mae-drawing-slider-slide-1 aligh-all' : ' mae-drawing-slider-slide-1'}>
              <img src={slide_image_7} alt="slide_image" />
              <div>
                <p><strong>Lexus Safety System+</strong></p>
                <p>The latest Lexus Safety System+ comes with expanded functions for better protection. Features include Pre-Collision System, Lane Departure Alert, and Dynamic Radar Cruise Control.</p>
              </div>
            </SwiperSlide>

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
      </div>
        </>
    )
}
