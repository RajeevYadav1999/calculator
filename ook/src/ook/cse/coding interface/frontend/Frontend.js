import React from 'react'
import Frontendimg from '../images/frontend.jpg'
import HTML from '../images/html.jpg'
import CSS from '../images/cses.jpg'
import JavaScript from '../images/javascript(1).jpg'
import Backend from '../backend.jpg'
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";

function Frontend() {
    return (
        <>
             <section className="cse-promo-primary" >
                <div className="cse-overlay" />
                <picture>
                    <source srcSet={Frontendimg} media="(min-width: 992px)" /><img className="cse-jarallax-img img-bg" src={Backend} alt="img" />
                </picture>
                <div className="cse-container">
                    <div className="cse-row">
                        <div className="cse-col-12">
                            <div className="cse-align-container">
                                <div className="cse-align-item"><span>OOK</span>
                                    <h1 className="cse-title">Frontend</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cse-section cse-project-cases">
                <div className="cse-container">
                    <div className="cse-row">
                        <div className="cse-col-lg-4 cse-col-md-6">

                            <div className="cse-cases-item"><a className="cse-img-holder" >
                                <div className="cse-overlay" /><img className="cse-card-img-bg" src={HTML} alt="img" /></a>
                                <div className="cse-description">
                                    <h5 className="cse-title">HTML</h5><Link to='/Cse/frontend/HTML'><a className="cse-with--line" >Explore more<BsArrowRight className='explore-more-icon'/></a></Link>
                                </div>
                            </div>

                        </div>
                        <div className="cse-col-lg-4 cse-col-md-6">

                            <div className="cse-cases-item"><a className="cse-img-holder" >
                                <div className="cse-overlay" /><img className="cse-card-img-bg" src={CSS} alt="img" /></a>
                                <div className="cse-description">
                                    <h5 className="cse-title">CSS</h5><Link to='/Cse/frontend/CSS'><a className="cse-with--line" >Explore more<BsArrowRight className='explore-more-icon'/></a></Link>
                                </div>
                            </div>

                        </div>
                        <div className="cse-col-lg-4 cse-col-md-6">

                            <div className="cse-cases-item"><a className="cse-img-holder">
                                <div className="cse-overlay" /><img className="cse-card-img-bg" src={JavaScript} alt="img" /></a>
                                <div className="cse-description">
                                    <h5 className="cse-title">JavaScript</h5><Link to='/Cse/frontend/HTML'><a className="cse-with--line" >Explore more<BsArrowRight className='explore-more-icon'/></a></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div></section>

        </>
    )
}
export default Frontend;