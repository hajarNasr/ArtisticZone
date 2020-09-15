import React, { useState, useEffect, useRef  } from 'react';
import Sidebar from './Sidebar';
import { MenuButton, ToTopButton } from '../components/Buttons';
import Menu from '../components/Menu';

const MainLayout = ()=>{
    const prevScrollY = useRef(null);
    let [toTop, setToTop] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;

            if (prevScrollY.current > currentScrollY && window.scrollY < 100) {
                setToTop(false);
            }
            if (prevScrollY.current < currentScrollY) {
                setToTop(true);
            }
            prevScrollY.current = currentScrollY;
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [toTop]);
    let [btnText, setBtnText] = useState("bars");
    const toggleMenu = ()=>{
        document.querySelector(".menu-wrapper").classList.toggle("show-menu");
        setBtnText(btnText==="bars"?"times":"bars");
    }
    return(
        <div>
            <Sidebar/>
            <MenuButton
                btnText = {btnText === "bars"?<span>&#9776;</span>:<span>&times;</span>}
                onClick = {toggleMenu}
            />
            <Menu onClick={toggleMenu}/>
            {toTop &&
                <ToTopButton/>
             }
        </div>
    )
}

export default MainLayout;