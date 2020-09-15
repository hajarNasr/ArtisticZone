import React from 'react';
import {animateScroll as scroll } from "react-scroll";
import '../css/components/buttons.css';

export const Button = ({type, className, btnText, onClick})=>{
    return(
        <button
           className={className}
           type={type}
           onClick={onClick}
           >
           {btnText}
        </button>
    )
}

export const MenuButton = ({onClick, btnText})=>{
    return(
        <button 
            className ="menu-button"
            onClick = {onClick}
        >
        { btnText }
        </button>
    )
}

export const ToTopButton = ()=>(
        <button 
          className ="to-top-button"
          onClick = {()=>{scroll.scrollToTop()}}
        >
         &#8607;
        </button>
)