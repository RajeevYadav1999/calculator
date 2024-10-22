// import React, { useRef, useState } from 'react';
// import { BsArrowRight } from 'react-icons/bs'
// import { Link } from 'react-router-dom';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';
// import { EffectCoverflow } from 'swiper/modules';
// import { Navigation } from 'swiper/modules';

// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


// import slide_image_1 from './img/1.jpg';
// import slide_image_2 from './img/2.jpg';
// import slide_image_3 from './img/3.jpg';
// import slide_image_4 from './img/4.jpg';
// import slide_image_5 from './img/5.jpg';
// import slide_image_6 from './img/6.jpg';
// import slide_image_7 from './img/7.jpg';
// import './index.css'
// function Slider() {
//   const [isActive, setIsActive] = useState(false);

//   const toggleClass = () => {
//     setIsActive(!isActive);
//   };
//   return (
//     <>
//       <ul className='mae-drawing-slider-navbar-ul'>
//       <div className='mae-drawing-slider-nav-logo-left'>
//                     <li className='mae-drawing-slider-nav-logo'>Discover <BsArrowRight/></li>
//                 </div>
//         <div className='mae-drawing-slider-nav-topic-right'>
//           <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types/Orthographic'>Orthographic</Link></li>
//           {/* <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types/Section'>Section</Link></li> */}
//           {/* <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types/Detail'>Detail</Link></li> */}
//           {/* <li className='mae-drawing-slider-nav-topics'><Link to='/Mechcinal/cad/DRAFTING/VIEWS/types/Auxiliary'>Auxiliary</Link></li> */}
//         </div>
//       </ul>
//       {/* <button onClick={toggleClass}>ghh</button> */}
//       <div className='main-background'>
//         <div className="bubble bubble1"></div>
//         <div className="bubble bubble2"></div>
//         <div className="bubble bubble3"></div>
//         <div className="container">
//           <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             loop={true}
//             slidesPerView={'auto'}
//             coverflowEffect={{
//               rotate: 0,
//               stretch: 0,
//               depth: 100,
//               modifier: 2.5,
//             }}
//             pagination={{ el: '.swiper-pagination', clickable: true }}
//             navigation={{
//               nextEl: '.swiper-button-next',
//               prevEl: '.swiper-button-prev',
//               clickable: true,
//             }}
//             modules={[EffectCoverflow, Pagination, Navigation]}
//             className="swiper_container"
//           >

//             <SwiperSlide className={isActive ? 'mae-drawing-slider-slide-1 aligh-all' : ' mae-drawing-slider-slide-1'}>
//               <img src={slide_image_1} alt="slide_image" />
//               <div>
//                 <p><strong>Side View/Profile View</strong></p>
//                 <p>Present the object as viewed from the front, typically representing the object's width (X) and height (Y) dimensions.</p>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className={isActive ? 'mae-drawing-slider-slide-1 aligh-all' : ' mae-drawing-slider-slide-1'}>
//               <img src={slide_image_2} alt="slide_image" />
//               <div>
//                 <p><strong>Top View/Plan View</strong></p>
//                 <p>Present the object as viewed from above, depicting the object's length (X) and width (Y) dimensions.</p>
//               </div>
//             </SwiperSlide>
//             <SwiperSlide className={isActive ? 'mae-drawing-slider-slide-1 aligh-all' : ' mae-drawing-slider-slide-1'}>
//               <img src={slide_image_3} alt="slide_image" />
//               <div>
//                 <br />
//                 <p><strong>Front View</strong></p>
//                 <p> Present the object as viewed from the front, typically representing the object's width (X) and height (Y) dimensions.</p>
//               </div>
//             </SwiperSlide>


//             <div className="slider-controler">
//               <div className="swiper-button-prev slider-arrow">
//                 <ion-icon name="arrow-back-outline"></ion-icon>
//               </div>
//               <div className="swiper-button-next slider-arrow">
//                 <ion-icon name="arrow-forward-outline"></ion-icon>
//               </div>
//             </div>
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Slider;