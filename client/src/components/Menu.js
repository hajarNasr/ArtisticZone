import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../helpers';
import '../css/components/menu.css';

const Menu = ({onClick})=>(
    <div className="menu-wrapper">
        <div className="menu-wrapper-inner">
            {categories.map(cat=>
                <Link to={`/${cat.id}/`} 
                 key={`${cat.id} menu-link`}
                 onClick={onClick}
                 className={`nav-link`}>
                   {cat.id}
                </Link>
            )}
        </div>
    </div>
)

export default Menu;