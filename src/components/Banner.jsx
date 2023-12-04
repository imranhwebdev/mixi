import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FaPaperPlane } from "react-icons/fa";
export default function Banner(){
    const title = "$MIXI";
    const desc = "Mixi all meme coins and their communities together and change the memeverse with the Mixi cosmo cat. Love it, build it.";
    const SocialItems = [
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
        <div className="banner">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={7}>
                        <div className="banner-content">
                        <figure className="banner__shap0">
                            {/* <img src={bannerShap0} alt="" /> */}
                        </figure> 
                        <h1 dangerouslySetInnerHTML={{ __html: title }} />
                            <p>{desc}</p>
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
                        </div>
                    </Col>
                    <Col lg={6}>
                        <figure className="responsive_img d-block d-lg-none mt-5">
                            {/* <img src={bannerImg} alt="" /> */}
                        </figure>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
