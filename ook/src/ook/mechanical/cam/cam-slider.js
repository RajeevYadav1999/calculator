// import React from 'react';
// import 'react-multi-carousel/lib/styles.css';
// import Carousel from 'react-multi-carousel';
// import Cad from '../imgaes/cad 1.png'
// import Cam from '../imgaes/cam 1.png'
// import {Link as PageLink} from 'react-router-dom'
// export default function Camslider() {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 3
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 2
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 600 },
//       items: 1
//     },
//     mobile: {
//       breakpoint: { max: 600, min: 0 },
//       items: 1
//     }
//   };
//     return (
//         <>
//         <br></br>
//         <br></br>
// <Carousel responsive={responsive}>
//   <div className='card'>
//     <img src={Cam} alt='product-image'/>
//         <h2>Forging Processes</h2>
//         <p>Forgings involve the shaping of metal using compressive forces.The force can be delivered with a hammer (often a power hammer) or a die.</p>
//         <p>
//             <button><PageLink to='/Mechcinal/cam/topics/forming/forgingProcesses'>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cad} alt='product-image'/>
//         <h2>Rolling Processes</h2>
//         <p>Metal stock is passed through one or more pairs of rolls to reduce the thickness and to make the thickness uniform</p>
//         <p>
//             <button><PageLink to='/Mechcinal/cam/topics/forming/rollingProcesses'>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cam} alt='product-image'/>
//         <h2>Extrusion Processes</h2>
//         <p>Material, usually in the form of a hot, semi-liquid mass, is forced through a shaped opening, called a die, to produce a continuous shape or profile. </p>
        
//         <p>
//             <button><PageLink to='/Mechcinal/cam/topics/forming/extrusionProcesses'>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cad} alt='product-image'/>
//         <h2>Sheet Metal Processes</h2>
//         <p>used to form and shape metal sheets into different products.</p>
//         <br/>
//         <p>
//             <button><PageLink to='/Mechcinal/cam/topics/forming/sheetMetalProcesses'>Learn more</PageLink></button>
//         </p>
//   </div>
  
// </Carousel>
//         </>
//     )
// }