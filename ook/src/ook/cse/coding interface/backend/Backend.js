import React from 'react'
import Frontend from '../frontend.jpg'
import Backend from '../backend.jpg'
import { Link } from 'react-router-dom';

export default function backend() {
    return (
        <>
            <section className="promo-primary" >
                <div className="overlay" />
                <picture>
                    <source srcSet={Backend} media="(min-width: 992px)" /><img className="jarallax-img img-bg" src={Backend} alt="img" />
                </picture>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="align-container">
                                <div className="align-item"><span>OOK</span>
                                    <h1 className="title">Backend</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section project-cases">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">

                            <div className="cases-item"><a className="img-holder" href="Swiftwave AHC System Varient.html">
                                <div className="overlay" /><img className="img-bg" src={Frontend} alt="img" /></a>
                                <div className="description">
                                    <h5 className="title">Python</h5><a className="with--line" href="Swiftwave AHC System Varient.html">Explore more</a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6">

                            <div className="cases-item"><a className="img-holder" href="cases 2.html">
                                <div className="overlay" /><img className="img-bg" src={Frontend} alt="img" /></a>
                                <div className="description">
                                    <h5 className="title">Java</h5><a className="with--line" href="cases-details.html">Explore more</a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6">

                            <div className="cases-item"><a className="img-holder" href="cases-details.html">
                                <div className="overlay" /><img className="img-bg" src={Frontend} alt="img" /></a>
                                <div className="description">
                                    <h5 className="title">Kotlin</h5><a className="with--line" href="cases-details.html">Explore more</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div></section>
        </>
    )
}