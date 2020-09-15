import React from 'react';
import Header from '../layout/Header';
import { categories } from '../helpers';
import MiniExhibition from './MiniExhibition';
import { useWindowSize } from '../custom-hooks/CustomHooks';
import HomeNavbar from '../components/HomeNavbar';
import Hamburger from '../components/Hamburger';

const Home = ()=>{  
    const [ width, height ] = useWindowSize();
    return(
        <div className="home-wrapper">
            <Header
                loginBtn = {true}
                signupBtn = {true}
                hideHomeLink = {true}
                headerItems= {width<1000?"hamburger":null}
            >
           {width>1000?
                <HomeNavbar
                    navClass="header-nav-wrapper"
                    linkClassNames= "topline-on-hover header-nav-link"
                    theKey="home"
                />
                :
            
                <Hamburger/> 
            }
            </Header>
            
            <div className="main-photo"/>

            {categories.map(obj=>
                <MiniExhibition
                    category = {obj.category}
                    key={obj.id}
                    id= {obj.id}
                    route = {obj.className}
                    className= {`home-section ${obj.className}`}
            />
            )}
        </div>
    )
}

export default Home;