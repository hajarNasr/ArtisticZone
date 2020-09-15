import React, { useState } from 'react';
import { Button } from './Buttons';
import HomeNavbar from './HomeNavbar';
import '../css/components/header-hamburger.css';

const Hamburger = ()=>{
    let [translate, setTranslate ] = useState(true);
    return(
        <div>
            <Button
                btnText = {translate?<span>&#9776;</span>:<span>&times;</span>}
                className="header-hamburger-btn"
                onClick= {()=> setTranslate(!translate)}
            />
            <div id="sidebar-list" className={`${translate? "addTransiton": "removeTransition"}`}>
                <HomeNavbar
                    theKey="hambuger"
                    navClass="hamburger-navbar"
                    linkClassNames= "underline-on-hover hamburger-navbar-link"
                    onClick = {()=>setTranslate(true)}
                />
            </div>
        </div>
    )
}

export default Hamburger;