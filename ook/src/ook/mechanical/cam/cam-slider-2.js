// import React from 'react';
// import 'react-multi-carousel/lib/styles.css';
// import Carousel from 'react-multi-carousel';
// import Cad from '../imgaes/cad 1.png'
// import Cam from '../imgaes/cam 1.png'
// import {Link as PageLink} from 'react-router-dom'

// export default function Camslider2() {
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
//     <img src={Cam} alt='product-image'/>
//         <h2>Manual Assembly Process</h2>
//         <p>This is a common assembly process involving the use of human hands and basic tools to assemble products. </p>
//         <br/>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cad} alt='product-image'/>
//         <h2>Semi-Automated Assembly </h2>
//         <p>This assembly process involves the use of machines and robotics to assemble products</p>
//         <br/>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cam} alt='product-image'/>
//         <h2>Fully Automated Assembly</h2>
//         <p>This type of assembly process involves the use of advanced technologies such as robots, conveyor belts, and computer-controlled machines to assemble products.</p>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cad} alt='product-image'/>
//         <h2>Sheet Metal Processes</h2>
//         <p>used to form and shape metal sheets into different products.</p>
//         <br/>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cam} alt='product-image'/>
//         <h2>Lean Assembly Process</h2>
//         <p>This process focuses on eliminating wastes and maintaining an effective flow throughout the assembly line. </p>
//         <br/>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
//   <div className='card'>
//     <img src={Cad} alt='product-image'/>
//         <h2>Batch Assembly Process</h2>
//         <p>In this process, products are assembled in batches or groups, rather than being assembled individually. </p>
//         <br/>
//         <p>
//             <button><PageLink>Learn more</PageLink></button>
//         </p>
//   </div>
// </Carousel>
//         </>
//     )
// }