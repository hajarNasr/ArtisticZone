import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '../components/FaIcons';

const HeaderLeftSide = ({title})=>{
    return(
        <div className="header-left-side">
            <span className="title">{title}</span>
            <Link to="/" className="home-link topline-on-hover">
                <HomeIcon/>
            </Link>
        </div>
    )
}

export default HeaderLeftSide;