// import React, { useState } from 'react';
// import Img1 from './Screenshot (149) 2 .png'
// import Img2 from './Screenshot (149).png'
// import Img3 from './Screenshot (150).png'
// import Img4 from './Screenshot (150) 2 .png'
// import Img5 from './Screenshot (151).png'
// import Img6 from './Screenshot (151) 2.png'
// import Img7 from './Screenshot (152).png'
// import Img8 from './Screenshot (152) 2.png'
// import Img9 from './Screenshot (153).png'
// const ImageChanger = () => {


//     const [selectedOption, setSelectedOption] = useState('option1');

//     const handleOptionChange = (event) => {
//         setSelectedOption(event.target.value);
//     };

//     return (
//         <>
//             <select id="options" value={selectedOption} onChange={handleOptionChange}>
//                 <option value="option1">Square</option>
//                 <option value="option2">Rectangle</option>
//                 <option value="option3">Hollow rectangle (rectangle tube)</option>
//                 <option value="option4">Tee section</option>
//                 <option value="option5">Channel section</option>
//                 <option value="option6">I-beam with equal flanges</option>
//                 <option value="option7">Angle (unequal legs)</option>
//                 <option value="option8">Solid circle</option>
//                 <option value="option9">Hollow circle or pipe</option>
//                 {/* Add more options as needed */}
//             </select>

//             <br />

//             {/* Display different images based on the selected option */}
//             {selectedOption === 'option1' && (
//                 <img src={Img1} alt="" />
//             )}
//             {selectedOption === 'option2' && (
//                 <img src={Img2} alt="" />
//             )}
//             {selectedOption === 'option3' && (
//                 <img src={Img3} alt="" />
//             )}
//             {selectedOption === 'option4' && (
//                 <img src={Img4} alt="" />
//             )}
//             {selectedOption === 'option5' && (
//                 <img src={Img5} alt="" />
//             )}
//             {selectedOption === 'option6' && (
//                 <img src={Img6} alt="" />
//             )}
//             {selectedOption === 'option7' && (
//                 <img src={Img7} alt="" />
//             )}
//             {selectedOption === 'option8' && (
//                 <img src={Img8} alt="" />
//             )}
//             {selectedOption === 'option9' && (
//                 <img src={Img9} alt="" />
//             )}


//         </>
//     );
// };

// export default ImageChanger;
