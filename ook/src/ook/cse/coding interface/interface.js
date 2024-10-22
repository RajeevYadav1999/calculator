import React from 'react'
import Frontend from './images/frontend(1).jpg'
import Backend1 from './images/backend(1).jpg'
import Background from '../../mechanical/videos/cse.mp4'
import { IoIosArrowDown } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
export default function Interface() {
  return (
    <>
      <section className='cse'>
        <section className="cse-promo-primary">
          <div className="cse-overlay" />
          <video autoPlay muted loop src={Background}></video>
          <div className="cse-container">
            <div className="cse-row">
              <div className="cse-col-12">
                <div className="cse-align-container">
                  <div className="cse-align-item">
                    <h1 className="cse-title">CSE</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cse-section cse-services-inner">
          <div className="cse-content-holder">
            <div className="cse-container">
              <div className="cse-row cse-offset-margin">
                <div className="cse-col-sm-8 cse-offset-sm-2 cse-col-md-6 cse-offset-md-0 cse-col-lg-4">
                  <div className="cse-info-box">
                    <div className="cse-info-box__img"><img src={Frontend} alt="service" /></div>
                    <div className="cse-info-box__category">Frontend</div>
                    <div className="cse-info-box__description">
                      <div className="cse-info-box__inner">
                        <h4 className="cse-info-box__title"> <a href="/">Frontend</a><i className="cse-fa fa-chevron-right" aria-hidden="true" ><IoIosArrowDown /></i>
                        </h4>
                        <div className="cse-info-box__hidden">
                          <p>Canthigaster rostrata spikefish brown trout loach summer flounder.
                            European minnow black dragonfish orbicular</p><a className="cse-info-box__link with--line" href="/"><Link to="/Cse/frontend">Explore more <BsArrowRight /></Link></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cse-col-sm-8 cse-offset-sm-2 cse-col-md-6 cse-offset-md-0 cse-col-lg-4">
                  <div className="cse-info-box">
                    <div className="cse-info-box__img"><img src={Backend1} alt="service" /></div>
                    <div className="cse-info-box__category">Backend</div>
                    <div className="cse-info-box__description">
                      <div className="cse-info-box__inner">
                        <h4 className="cse-info-box__title"> <a href="/">Backend</a><i className="cse-fa fa-chevron-right" aria-hidden="true" ><IoIosArrowDown /></i></h4>
                        <div className="cse-info-box__hidden">
                          <p>Canthigaster rostrata spikefish brown trout loach summer flounder.
                            European minnow black dragonfish orbicular</p><a className="cse-info-box__cse-link cse-with--line" href="/"><Link to="/backend">Explore more <BsArrowRight /></Link></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cse-col-sm-8 cse-offset-sm-2 cse-col-md-6 cse-offset-md-0 cse-col-lg-4">
                  <div className="cse-info-box">
                    <div className="cse-info-box__img"><img src={Frontend} alt="service" /></div>
                    <div className="cse-info-box__category">Artificial intelligence</div>
                    <div className="cse-info-box__description">
                      <div className="cse-info-box__inner">
                        <h4 className="cse-info-box__title"> <a href="/">Artificial intelligence</a><i className="cse-fa fa-chevron-right" aria-hidden="true" ><IoIosArrowDown /></i>
                        </h4>
                        <div className="cse-info-box__hidden">
                          <p>Canthigaster rostrata spikefish brown trout loach summer flounder.
                            European minnow black dragonfish orbicular</p><a className="cse-info-box__cse-link cse-with--line" href="/"><Link to="/ArtificialIntelligence">Explore more <BsArrowRight /></Link></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="cse-col-sm-8 cse-offset-sm-2 cse-col-md-6 cse-offset-md-0 cse-col-lg-4">
                  <div className="cse-info-box">
                    <div className="cse-info-box__img"><img src={Frontend} alt="service" /></div>
                    <div className="cse-info-box__category">Artificial intelligence</div>
                    <div className="cse-info-box__description">
                      <div className="cse-info-box__number">03</div>
                      <div className="cse-info-box__inner">
                        <h4 className="cse-info-box__title"> <a href="#">Artificial intelligence</a><i className="cse-fa fa-chevron-right" aria-hidden="true" ><IoIosArrowDown/></i>
                        </h4>
                        <div className="cse-info-box__hidden">
                          <p>Canthigaster rostrata spikefish brown trout loach summer flounder.
                            European minnow black dragonfish orbicular</p><a className="cse-info-box__cse-link cse-with--line" href="#"><Link to="/ArtificialIntelligence">Explore more</Link></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cse-col-sm-8 cse-offset-sm-2 cse-col-md-6 cse-offset-md-0 cse-col-lg-4">
                  <div className="cse-info-box">
                    <div className="cse-info-box__img"><img src={Frontend} alt="service" /></div>
                    <div className="cse-info-box__category">Artificial intelligence</div>
                    <div className="cse-info-box__description">
                      <div className="cse-info-box__number">03</div>
                      <div className="cse-info-box__inner">
                        <h4 className="cse-info-box__title"> <a href="#">Artificial intelligence</a><i className="cse-fa fa-chevron-right" aria-hidden="true" ><IoIosArrowDown/></i>
                        </h4>
                        <div className="cse-info-box__hidden">
                          <p>Canthigaster rostrata spikefish brown trout loach summer flounder.
                            European minnow black dragonfish orbicular</p><a className="cse-info-box__cse-link cse-with--line" href="#"><Link to="/ArtificialIntelligence">Explore more</Link></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cse-col-sm-8 cse-offset-sm-2 cse-col-md-6 cse-offset-md-0 cse-col-lg-4">
                  <div className="cse-info-box">
                    <div className="cse-info-box__img"><img src={Frontend} alt="service" /></div>
                    <div className="cse-info-box__category">Artificial intelligence</div>
                    <div className="cse-info-box__description">
                      <div className="cse-info-box__number">03</div>
                      <div className="cse-info-box__inner">
                        <h4 className="cse-info-box__title"> <a href="#">Artificial intelligence</a><i className="cse-fa fa-chevron-right" aria-hidden="true" ><IoIosArrowDown/></i>
                        </h4>
                        <div className="cse-info-box__hidden">
                          <p>Canthigaster rostrata spikefish brown trout loach summer flounder.
                            European minnow black dragonfish orbicular</p><a className="cse-info-box__cse-link cse-with--line" href="#"><Link to="/ArtificialIntelligence">Explore more</Link></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </section>

    </>
  )
}
