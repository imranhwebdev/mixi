import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaTwitter, FaPaperPlane,  } from "react-icons/fa";
import HeroRightImg from "../assets/img/hero-right-img.png";
import sociallogo3 from "../assets/img/social-logo3.svg";
import sociallogo4 from "../assets/img/social-logo4.svg";
import sociallogo5 from "../assets/img/social-logo5.svg";
export default function Banner(){
    const title = "$MIXI";
    const desc = "Mixi all meme coins and their communities together and change the memeverse with the Mixi cosmo cat. Love it, build it.";
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
        <div className="banner">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className="banner-content">
                        <figure className="banner__shap0">
                            {/* <img src={bannerShap0} alt="" /> */}
                        </figure> 
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
                    <Col lg={6}>
                        <figure>
                            <img src={HeroRightImg} alt="" />
                        </figure>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
