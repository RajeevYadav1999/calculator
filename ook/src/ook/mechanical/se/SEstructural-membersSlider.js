import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Bean from '../../mechanical/New folder/Screenshot (140).png'
// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                direction={'vertical'}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper SEstructural-membersSlider"
            >
                <SwiperSlide>
                    <div className='mae-se-strutural-members-section-main'>
                        <div className='mae-se-strutural-members-section-main-div-1'>
                            <div className='mae-se-strutural-members-section-main-div-1-background-img'>
                                <img src={Bean} alt='not-showing' />
                                <div className='mae-se-strutural-members-section-main-div-1-background-img-overlay'></div>
                            </div>
                            <div className='mae-se-strutural-members-section-main-div-1-overlay'>

                                <h1 className='mae-se-strutural-members-section-main-div-1-overlay-h1'>Beam</h1>
                                <p className='mae-se-strutural-members-section-main-div-1-overlay-p'>Horizontal member of a structure that supports vertical or lateral loads.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mae-se-strutural-members-section-main'>
                        <div className='mae-se-strutural-members-section-main-div-1'>
                            <div className='mae-se-strutural-members-section-main-div-1-background-img'>
                                <img src={Bean} alt='not-showing' />
                                <div className='mae-se-strutural-members-section-main-div-1-background-img-overlay'></div>
                            </div>
                            <div className='mae-se-strutural-members-section-main-div-1-overlay'>

                                <h1 className='mae-se-strutural-members-section-main-div-1-overlay-h1'>Beam</h1>
                                <p className='mae-se-strutural-members-section-main-div-1-overlay-p'>Horizontal member of a structure that supports vertical or lateral loads.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='mae-se-strutural-members-section-main'>
                        <div className='mae-se-strutural-members-section-main-div-1'>
                            <div className='mae-se-strutural-members-section-main-div-1-background-img'>
                                <img src={Bean} alt='not-showing' />
                                <div className='mae-se-strutural-members-section-main-div-1-background-img-overlay'></div>
                            </div>
                            <div className='mae-se-strutural-members-section-main-div-1-overlay'>

                                <h1 className='mae-se-strutural-members-section-main-div-1-overlay-h1'>Beam</h1>
                                <p className='mae-se-strutural-members-section-main-div-1-overlay-p'>Horizontal member of a structure that supports vertical or lateral loads.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
