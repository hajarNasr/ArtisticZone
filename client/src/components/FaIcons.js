import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart, faHome, faSignOutAlt, 
        faCaretDown, faCaretUp,
        faPlusCircle, faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

export const FaShoppingCart = () =>(
    getFontAwesomeIcon(faShoppingCart, "shopping-cart")
);

export const FacebookIcon = () =>(
    getFontAwesomeIcon(faFacebook)
)
export const TwitterIcon = () =>(
    getFontAwesomeIcon(faTwitter)
)
export const InstagramIcon = () =>(
    getFontAwesomeIcon(faInstagram)
)

export const HomeIcon = () =>(
    getFontAwesomeIcon(faHome)
)
export const LogoutIcon = () =>(
    getFontAwesomeIcon(faSignOutAlt)
)

export const PlusIcon = () =>(
    getFontAwesomeIcon(faPlusCircle, "plus-circle")
)
export const ExternalLinkIcon = () =>(
    getFontAwesomeIcon(faExternalLinkAlt, "external")
)

export const UpCaretIcon = ({onClick}) =>(
    getFontAwesomeIcon(faCaretUp, "caret-up", onClick)
)

export const DownCaretIcon = ({onClick}) =>(
    getFontAwesomeIcon(faCaretDown, "caret-down" , onClick)
)

export const getFontAwesomeIcon = (faIcon, className, onClick)=>(
    <FontAwesomeIcon icon = {faIcon}
                     className= {className}
                     onClick={onClick}
    />
);