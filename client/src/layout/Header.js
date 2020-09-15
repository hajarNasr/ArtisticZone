import React from 'react';
import HeaderAuth from './HeaderAuth';
import HeaderLeftSide from './HeaderLeftSide';
import '../css/layout/header.css';

const Header = ({loginBtn, signupBtn, hideHomeLink, title, headerItems, children})=>{
    return(
        <header className="header">
           <div className="header-wrapper">
           <div className={`${headerItems? "hamburger-header-items header-items": "header-items"}`}>
               {children}
                
               {!hideHomeLink &&
                  <HeaderLeftSide
                      title= {title}
                 />
               }
              <HeaderAuth
                 loginBtn  = {loginBtn}
                 signupBtn = {signupBtn}
              />
           </div>
           </div>
        </header>
    )
}

export default Header;

