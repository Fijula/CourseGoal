
//case 1: default css
//import './Button.css';
// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };
//  default js syntax  add the css inside backticks` remove button class anme
//add & for pseduo selectors
// --------------------------------------------
// case 2: Styled Components
//import styled from 'styled-components'
// const Button =styled.button`
//   width:100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media(min-width:786px){
//  width:auto;
//   }

// &:focus {
//   outline: none;
// }

// &:hover,
// &:active {
//   background: #ac0e77;
//   border-color: #ac0e77;
//   box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
// }`
//-------------------------------------------------
//case 3:Using css module : whatever class we add in css wil be a property

import React from 'react';
import styles from "./Button.css";

function Button(props) {
  return (
  <button type={props.type} className={styles.button}
   onClick ={props.onClick}
   >
    {props.children}
    </button>
  
  )
}





export default Button;