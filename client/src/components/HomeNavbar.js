import React from 'react';
import { Link } from "react-scroll";
import { categories } from '../helpers';

const HomeNavbar = ({navClass, linkClassNames, theKey, onClick})=>(
    <nav className={navClass}>
        {categories.map(obj=>
        <NavLink to={obj.id}
                 key={`${obj.category} nav ${theKey}`}
                 linkClassNames = {linkClassNames}
                 onClick={onClick}
        />
        )}
   </nav>
);


export const NavLink = ({to, linkClassNames, onClick})=>(
    <Link
       to={to}
       smooth={true} 
       offset={-70}
       className= { linkClassNames }
       onClick={onClick}
    >
      {to}
    </Link>
)

export default HomeNavbar;
