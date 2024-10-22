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
import IMG1 from '../files/casting/casting/pattern-transformed.jpeg'
import IMG2 from '../files/casting/casting/mold.jpg'
import IMG3 from '../files/casting/casting/core.jpg'
import IMG4 from '../files/casting/casting/pattern-transformed.jpeg'
import IMG5 from '../files/casting/casting/furnance.jpg'
import IMG6 from '../files/casting/casting/pattern-transformed.jpeg'
import IMG7 from '../files/casting/casting/chills.jpg'
import IMG8 from '../files/casting/casting/pattern-transformed.jpeg'
import IMG9 from '../files/casting/casting/flask.jpg'
import IMG10 from '../files/casting/casting/pattern-transformed.jpeg'

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
                        <h3 className='mae-cad-info-blue-section-main-topic'>Pattern</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Replica of the object to be cast, used to </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> prepare the cavity into which molten metal </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> will be poured, made of wood, plastic, or metal.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG1}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    
                <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Mold or Die</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />They are the vessels into which the materials </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> are poured and formed.   </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> They can be open or closed mold.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG2}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Cores</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Insert(made of sand, metal, or other material) </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> used to create cavity or hollowness in the final component.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill /> Core is placed inside the mold before the </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> molten metal is poured.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Molten metal then fills the space around the</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> core, taking its shape and forming the  desired internal features.</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />  Removed after the modification of metal or in </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>some cases, the core is made of soluble material.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG3}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Casting Material</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Depends upon the product, but metals such </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>as iron, steel, aluminum, bronze, brass and alloys are commonly used.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG4}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Melting Furnace</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Used to melt the metal to be cast, Can be </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> electric, gas, or induction-based.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG5}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Ladle</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Once the metal is metal ladle is used for </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> transporting and pouring out molten metals.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG6}/>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Chills</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Heat sinks(made of metal, ceramics </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>or other material) that help solidify the molten metal more quickly in a certain region and are used when even cooling and solidification is required.</h3>
                        

                        
                        </div>
                        <div className='img'>
                            <img src={IMG7}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Parting Compound</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Used to prevent the casting from sticking to</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>  the mold, facilitating its removal.</h3>

                        
                        </div>
                        <div className='img'>
                            <img src={IMG8}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>

                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Flask</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />Box, without top and bottom, in which the </h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'>mold is made, having its upper and lower halves, cope and drag, respectively.</h3>
                                           
                        </div>
                        <div className='img'>
                            <img src={IMG9}/>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='castingpropertiesdisplayFlex'>
                        <div className='text'>
                        <h3 className='mae-cad-info-blue-section-main-topic'>Finishing tools</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription'><GoDotFill />After casting, the product might need</h3>
                        <h3 className='mae-cad-info-blue-section-main-decsription not-icon'> finishing touches like polishing or machining to remove the excess material or to get an aesthetic look.</h3>
                      
                        </div>
                        <div className='img'>
                            <img src={IMG10}/>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
