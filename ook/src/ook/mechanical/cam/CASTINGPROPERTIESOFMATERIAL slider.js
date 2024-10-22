import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { GoDotFill } from "react-icons/go";

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';


//images
import IMG1 from '../files/casting/casting/chills.jpg'
import IMG2 from '../files/casting/casting/core.jpg'
import IMG3 from '../files/casting/casting/flask.jpg'
import IMG4 from '../files/casting/casting/furnance.jpg'
import IMG5 from '../files/casting/casting/mold.jpg'
import IMG6 from '../files/casting/casting/pattern-transformed.jpeg'

export default function Castingpropertyslider() {
    return (
        <>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper castingproperties"
            >
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Fluidity</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Ability of a metal to flow and fill all areas of</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>  the mold before solidifying.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Influenced by the casting temperature,</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> the type of metal, and its quality.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG1}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Shrinkage</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Ability of a metal to flow and fill all areas of</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>  the mold before solidifying.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Influenced by the casting temperature,</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> the type of metal, and its quality.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG2}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Machinability</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Ability of a metal to flow and fill all areas of</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>  the mold before solidifying.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Influenced by the casting temperature,</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> the type of metal, and its quality.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG3}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Surface Finish</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Ability of a metal to flow and fill all areas of</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>  the mold before solidifying.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Influenced by the casting temperature,</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> the type of metal, and its quality.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG4}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Pouring temperature</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Ability of a metal to flow and fill all areas of</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>  the mold before solidifying.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Influenced by the casting temperature,</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> the type of metal, and its quality.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG5}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Draft</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Ability of a metal to flow and fill all areas of</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>  the mold before solidifying.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Influenced by the casting temperature,</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> the type of metal, and its quality.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG6}/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
