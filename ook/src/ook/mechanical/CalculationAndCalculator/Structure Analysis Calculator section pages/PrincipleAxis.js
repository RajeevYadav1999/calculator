import React, { useEffect, useState,useRef } from 'react';

import Areaimg from '../Screenshot (165).jpg'

export default function PrincipleAxis() {
    const textRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                });
            },
            { threshold: 1 }
        );

        if (textRef.current) {
            observer.observe(textRef.current);
        }

        return () => {
            if (textRef.current) {
                observer.unobserve(textRef.current);
            }
        };
    }, []);
    return (
        <>
            <section className='structure-analysis-calculator-formula-dropdown-section'>
                <div className='mae-cad-info-second-section-main-grid-explore-more-grid'>
                    <div className='calculator-Area '>
                        <div className='calculator-area-overlay'></div>
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 ${isVisible ? 'scrolled' : ''}`}  >Principle axis:</h3>
                        <br ref={textRef} />
                        <h3 className={`gbp-h3 structure-analysis-calculator-information-h3 defination ${isVisible ? 'scrolled' : ''}`} >Main axes of cross section or
                            members which are perpendicular and intersect each other at the center of the area or centroid.
                        </h3>
                        <br />
                        <br /><br />
                    </div>
                    <div>
                        <img className='structure-analysis-calculator-formula-dropdown-section-img areaimg' src={Areaimg} alt='' />
                    </div>
                </div>
            </section>
        </>
    )
}
