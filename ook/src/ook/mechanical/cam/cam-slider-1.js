// import React from 'react';
// import 'react-multi-carousel/lib/styles.css';
// import Carousel from 'react-multi-carousel';
// import Cad from '../imgaes/cad 1.png'
// import Cam from '../imgaes/cam 1.png'
// import Footer from '../../Footer';
// import {Link as PageLink} from 'react-router-dom'

// export default function Camslider1() {
//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 3
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 2
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 600 },
//           items: 1
//         },
//         mobile: {
//           breakpoint: { max: 600, min: 0 },
//           items: 1
//         }
//       };
//     return (
//         <>
//         <br></br>
//         <br></br>
// <Carousel responsive={responsive}>
//   <div className='card'>
//     <img src={Cad} alt='product-image'/>
//         <h2>Abrasive Cutting</h2>
//         <p>In this process, a hard material, such as diamond or sandpaper, is used to cut through a softer material.</p>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cam} alt='product-image'/>
//         <h2>Plasma Cutting</h2>
//         <p>This process uses a plasma torch to cut through materials such as metal, steel, and aluminium.</p>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cad} alt='product-image'/>
//         <h2>Waterjet Cutting</h2>
//         <p>In this process, a high-pressure stream of water is used to cut through various materials</p>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cam} alt='product-image'/>
//         <h2>Laser Cutting</h2>
//         <p>This process uses a high-powered laser to cut through various materials such as metal, plastic, and wood.</p>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cad} alt='product-image'/>
//         <h2>Shearing</h2>
//         <p>This is a common assembly process involving the use of human hands and basic tools to assemble products. </p>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cam} alt='product-image'/>
//         <h2>Electrical Discharge Machining (EDM)</h2>
//         <p>This assembly process involves the use of machines and robotics to assemble products.</p>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cad} alt='product-image'/>
//         <h2>Fully Automated Assembly </h2>
//         <p>This type of assembly process involves the use of advanced technologies such as robots</p>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
// </Carousel>
// <Footer/>
//         </>
//     )
// }