import React from 'react';
import { FacebookIcon , TwitterIcon, InstagramIcon} from './FaIcons';
import '../css/components/footer.css'

const Footer = ()=>{
    return(
        <footer className="footer">
           <div>
                <ul className="social-links">
                    <li><FacebookIcon/></li>
                    <li><TwitterIcon/></li>
                    <li><InstagramIcon/></li>
                </ul>
                <div className="copy">&copy;Artistic Zone 2020</div>
           </div>
        </footer>
    )
}

export default Footer;