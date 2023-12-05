import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaTwitter, FaPaperPlane } from "react-icons/fa";
import siteLogo from '../assets/img/Logo.svg';
import sociallogo3 from "../assets/img/social-logo3.svg";
import sociallogo4 from "../assets/img/social-logo4.svg";
import sociallogo5 from "../assets/img/social-logo5.svg";
// import twitterX from '../assets/img/twitter_x.svg';
export default function Footer(){
    const footerLeftDesc = 'A dedicated and secure platform allowing you to automate your trading journey';
    const footerSocialTitle = 'Stay Connected';
    const currentYear = new Date().getFullYear();
    const Copyright = `© ${currentYear} Surge. All rights reserved.`;

    const SocialItems = [
        {
            icon: <FaTwitter />,
            url:'https://www.google.com'
        },
        {
            icon: <FaPaperPlane />,
            url:'https://www.google.com'
        },
        {
            imageSrc: sociallogo3,
            url:'https://www.google.com'
        },
        {
            imageSrc: sociallogo4,
            url:'https://www.google.com'
        },
        {
            imageSrc: sociallogo5,
            url:'https://www.google.com'
        },
    ]
    return(
        <footer className="footer">
            <Container>
                <Row className='justify-content-center'>
                    <Col sm="8">
                        <div className="footer__content__area text-center">
                            <a href="/" className='footer__logo'>
                                <img src={siteLogo} alt="Footer Logo" />
                            </a>
                            <p>{footerLeftDesc}</p>
                            <h5>{footerSocialTitle}</h5>
                            <ul className='footer__socials'>
                                {SocialItems.map((SocialItem, index)=>(
                                     <li key={index}> 
                                        <a href={SocialItem.url}  target="_blank"> 
                                             {SocialItem.icon ? (SocialItem.icon) 
                                            : 
                                             (<img src={SocialItem.imageSrc} alt="Social Media" />)} 
                                         </a>
                                     </li>
                                ))}
                            </ul>
                            <p className='copy__right'>{Copyright}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}