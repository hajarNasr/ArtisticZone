import React from 'react';

export const AddToCartIcon = ({onClick})=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             onClick={onClick}
             width="24" height="24"
             viewBox="0 0 172 172"
             className="add-to-cart-icon"
            fill="whitesmoke">
            <g fill="none" fillRule="nonzero" stroke="none" 
            strokeWidth="1" strokeLinecap="butt" 
            strokeLinejoin="miter" strokeMiterlimit="10" 
            strokeDasharray="" strokeDashoffset="0" fontFamily="none"
             fontWeight="none" fontSize="none" textAnchor="none"><path d="M0,172v-172h172v172z"
              fill="none"></path><g fill="whitesmoke"><path d="M0,0v14.33333h23.06771l28.66667,114.66667h96.97396l1.56771,-5.15104l14.78125,-49.71875l5.15104,-16.79688h-15.00521l-3.80729,12.54167l-13.4375,44.79167h-75.02604l-28.66667,-114.66667zM93.16667,0v50.16667h-17.91667l25.08333,34.26563l25.08333,-34.26562h-17.91667v-50.16667zM75.25,136.16667c-9.88216,0 -17.91667,8.03451 -17.91667,17.91667c0,9.88216 8.03451,17.91667 17.91667,17.91667c9.88216,0 17.91667,-8.03451 17.91667,-17.91667c0,-9.88216 -8.03451,-17.91667 -17.91667,-17.91667zM125.41667,136.16667c-9.88216,0 -17.91667,8.03451 -17.91667,17.91667c0,9.88216 8.03451,17.91667 17.91667,17.91667c9.88216,0 17.91667,-8.03451 17.91667,-17.91667c0,-9.88216 -8.03451,-17.91667 -17.91667,-17.91667z">
          </path></g></g>
          </svg>
    )
}


export const RemoveFromCartIcon = ({onClick})=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             width="24" height="24"
             viewBox="0 0 172 172"
             className="remove-from-cart-icon"
             onClick={onClick}
            fill="#000000">
            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" 
               strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" 
               fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
               <path d="M0,172v-172h172v172z" fill="none"></path>
               <g fill="whitesmoke">
               <path d="M0,0v14.33333h23.06771l28.66667,114.66667h96.97396l1.56771,-5.15104l14.78125,-49.71875l5.15104,-16.79688h-15.00521l-3.80729,12.54167l-13.4375,44.79167h-75.02604l-28.66667,-114.66667zM86,0l-29.33854,21.5l29.33854,21.5v-14.33333h14.33333c5.68294,0 8.95833,1.53972 10.97396,3.58333c2.01563,2.04362 3.35938,5.23503 3.35938,10.75v28.66667h14.33333v-28.66667c0,-8.14649 -2.40755,-15.53711 -7.61458,-20.82812c-5.20703,-5.29101 -12.68164,-7.83854 -21.05208,-7.83854h-14.33333zM75.25,136.16667c-9.88216,0 -17.91667,8.03451 -17.91667,17.91667c0,9.88216 8.03451,17.91667 17.91667,17.91667c9.88216,0 17.91667,-8.03451 17.91667,-17.91667c0,-9.88216 -8.03451,-17.91667 -17.91667,-17.91667zM125.41667,136.16667c-9.88216,0 -17.91667,8.03451 -17.91667,17.91667c0,9.88216 8.03451,17.91667 17.91667,17.91667c9.88216,0 17.91667,-8.03451 17.91667,-17.91667c0,-9.88216 -8.03451,-17.91667 -17.91667,-17.91667z"></path></g></g></svg>
    )
}