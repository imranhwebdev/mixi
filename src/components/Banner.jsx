import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaTwitter, FaPaperPlane,  } from "react-icons/fa";
import HeroRightImg from "../assets/img/hero-right-img.png";
import sociallogo1 from "../assets/img/social-logo1.svg";
import sociallogo2 from "../assets/img/social-logo2.svg";
import sociallogo3 from "../assets/img/social-logo3.svg";
import sociallogo4 from "../assets/img/social-logo4.svg";
import sociallogo5 from "../assets/img/social-logo5.svg";
import heroshap1 from "../assets/img/hero-bottom-left-shap.png";
import heroshap2 from "../assets/img/hero-top-left-star.png";
import heroshap3 from "../assets/img/hero-right-top-shap.png";
import heroshap4 from "../assets/img/hero-right-shap.png";
export default function Banner(){
    const title = "$MIXI";
    const desc = "Mixi all meme coins and their communities together and change the memeverse with the Mixi cosmo cat. Love it, build it.";
    const SocialItems = [
        {
            imageSrc: sociallogo1,
            url:'https://www.google.com'
        },
        {
            imageSrc: sociallogo2,
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
        <div className="banner">
            
            <figure className="banner__shap1">
                <img src={heroshap1} alt="" />
            </figure> 
            <figure className="banner__shap2">
                <img src={heroshap2} alt="" />
            </figure> 
            <figure className="banner__shap3">
                <img src={heroshap3} alt="" />
            </figure> 
            <Container>
                <Row className='align-items-center'>
                    <Col lg={8} md="7">
                        <div className="banner-content">
                        <h1 dangerouslySetInnerHTML={{ __html: title }} />
                            <p>{desc}</p>
                            <ul className='social__media'>
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
                        </div>
                    </Col>
                    <Col lg={4} md="5">
                        <figure>
                            <img src={HeroRightImg} alt="" />
                        </figure>
                    </Col>
                </Row>   
            </Container>
            
            <figure className="banner__shap4">
                <img src={heroshap4} alt="" />
            </figure> 
        </div>
    )
}
