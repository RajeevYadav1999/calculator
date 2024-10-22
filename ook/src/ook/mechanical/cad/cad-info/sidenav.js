// import React, { useState, useRef, useEffect } from 'react';
// // import './Dropdown.css'; // Make sure to create a CSS file for styling

// function Dropdown() {
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownVisible(false);
//       }
//     }

//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const toggleDropdown = () => {
//     setIsDropdownVisible(!isDropdownVisible);
//   };

//   const handleItemClick = () => {
//     toggleDropdown();
//   };

//   return (
//     <div className="dropdown-container">
//       <li
//         className="dropdown-trigger"
//         onClick={handleItemClick}
//       >
//         Click Me
//         {isDropdownVisible && (
//           <ul className="dropdown" ref={dropdownRef}>
//             <li>Item 1</li>
//             <li>Item 2</li>
//             <li>Item 3</li>
//           </ul>
//         )}
//       </li>
//     </div>
//   );
// }

// export default Dropdown;
