// import React, { useState, useEffect } from 'react';
// import CalulatorUnitConverter from './UnitSelectionProperty/square'
// import Img1 from './Screenshot (149) 2 .png'
// import Img2 from './Screenshot (149).png'
// import Img3 from './Screenshot (150).png'
// import Img4 from './Screenshot (150) 2 .png'
// import Img5 from './Screenshot (151).png'
// import Img6 from './Screenshot (151) 2.png'
// import Img7 from './Screenshot (152).png'
// import Img8 from './Screenshot (152) 2.png'
// import Img9 from './Screenshot (153).png'
// import RectangleUnitConverter from './UnitSelectionProperty/Rectangle';
// import HollowCircle from './UnitSelectionProperty/Hollowcircle';
// import SolidCircle from './SolidCircle';
// import HollowReactangle from './HollowReactangle';
// import TeeSection from './TeeSection';
// // import ImageChanger from './Calculatorimgchanger';
// export default function Imgconverter() {

//     const [activeMenu, setActiveMenu] = useState(null);

//     const handleMenuHover = (menuIndex) => {
//         setActiveMenu(menuIndex);
//     };

//     const handleMenuLeave = () => {
//         setActiveMenu(null);
//     };

//     const isMenuActive = (menuIndex) => {
//         return activeMenu === menuIndex;
//     };
//     const [isToggled, setToggled] = useState(false);

//     const handleToggle = () => {
//         setToggled(!isToggled);
//     };


//     //  background img zoom

//     const [scrollPosition, setScrollPosition] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             const position = window.pageYOffset;
//             setScrollPosition(position);
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const [selectedOption, setSelectedOption] = useState("option1");

//     const handleOptionChange = (option) => {
//         setSelectedOption(option)
//     }
//     return (
//         <>
//             <div className="container">
//                 <div className="sub-container top" >
//                     <div>
//                         <button onClick={() => handleOptionChange("option1")}>Square</button>
//                         <button onClick={() => handleOptionChange("option2")}>Rectangle</button>
//                         <button onClick={() => handleOptionChange("option3")}>Hollow rectangle (rectangle tube)</button>
//                         <button onClick={() => handleOptionChange("option4")}>Tee section</button>
//                         <button onClick={() => handleOptionChange("option5")}>Channel section</button>
//                         <button onClick={() => handleOptionChange("option6")}>I-beam with equal flanges</button>
//                         <button onClick={() => handleOptionChange("option7")}>Angle (unequal legs)</button>
//                         <button onClick={() => handleOptionChange("option8")}>Solid circle</button>
//                         <button onClick={() => handleOptionChange("option9")}>Hollow circle or pipe</button>
//                         {/* Add more buttons as needed */}
//                     </div>

//                     <br />

//                     {/* Display different images based on the selected option */}
//                     {selectedOption === 'option1' && (
//                         <img src={Img1} alt="" />
//                     )}
//                     {selectedOption === 'option2' && (
//                         <img src={Img2} alt="" />
//                     )}
//                     {selectedOption === 'option3' && (
//                         <img src={Img3} alt="" />
//                     )}
//                     {selectedOption === 'option4' && (
//                         <img src={Img4} alt="" />
//                     )}
//                     {selectedOption === 'option5' && (
//                         <img src={Img5} alt="" />
//                     )}
//                     {selectedOption === 'option6' && (
//                         <img src={Img6} alt="" />
//                     )}
//                     {selectedOption === 'option7' && (
//                         <img src={Img7} alt="" />
//                     )}
//                     {selectedOption === 'option8' && (
//                         <img src={Img8} alt="" />
//                     )}
//                     {selectedOption === 'option9' && (
//                         <img src={Img9} alt="" />
//                     )}


//                     {/* <ImageChanger/> */}
//                 </div>
//                 <div className="sub-container center">
//                     {/* <img src={IMG} alt='' /> */}
//                 </div>
//                 {/* {renderDivs()} */}
//                 {selectedOption === 'option1' && (
//                     <CalulatorUnitConverter />
//                 )}
//                 {selectedOption === 'option2' && (
//                     <RectangleUnitConverter />
//                 )}
//                 {selectedOption === 'option3' && (
//                     <HollowReactangle />
//                 )}
//                 {selectedOption === 'option4' && (
//                     <TeeSection />
//                 )}
//                 {selectedOption === 'option8' && (
//                     <SolidCircle />
//                 )}
//                 {selectedOption === 'option9' && (
//                     <HollowCircle />
//                 )}
//             </div>

//         </>
//     );
// }

// // export default Imgconverter;
