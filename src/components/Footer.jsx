import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaPaperPlane } from "react-icons/fa";
import siteLogo from '../assets/img/Logo.svg';
// import twitterX from '../assets/img/twitter_x.svg';
export default function Footer(){
    const footerLeftDesc = 'A dedicated and secure platform allowing you to automate your trading journey';
    const footerSocialTitle = 'Stay Connected';
    const currentYear = new Date().getFullYear();
    const Copyright = `© ${currentYear} Surge. All rights reserved.`;

    const footerSocialItems = [
        {
            icon: <FaPaperPlane />,
            url:'https://www.google.com'
        },
        {
            icon: <FaPaperPlane />,
            url:'https://www.google.com'
        },
        {
            icon: <FaPaperPlane />,
            url:'https://www.google.com'
        },
        {
            icon: <FaPaperPlane />,
            url:'https://www.google.com'
        },
        {
            icon: <FaPaperPlane />,
            url:'https://www.google.com'
        },
    ]
    return(
        <footer className="footer">
            <Container>
                <Row className='justify-content-center'>
                    <Col sm="8">
                        <div className="footer_top_right text-center">
                            <a href="/" className='footer__logo'>
                                <img src={siteLogo} alt="Footer Logo" />
                            </a>
                            <p>{footerLeftDesc}</p>
                            <h5>{footerSocialTitle}</h5>
                            <ul className='footer__socials'>
                                {footerSocialItems.map((footerSocialItem, index)=>(
                                     <li key={index}> 
                                        <a href={footerSocialItem.url}  target="_blank"> 
                                             {footerSocialItem.icon ? (footerSocialItem.icon) 
                                            : 
                                             (<img src={footerSocialItem.imageSrc} alt="Social Media" />)} 
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