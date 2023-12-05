import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import AboutLefttImg from "../assets/img/about-left-img.png";
export default function About(){
    const title = "about $mixi";
    const desc1 = "Missed the Doge? Shiba? Dogelon Mars? And others? Missed Pepe this year? Did you also miss copies of them that weren't all made just for the community? But you can still be strong part of the new community? Yes? Either way, Mixi, the magic cosmo cat, was born to connect all communities and open the gateway to unbelieveable gains and takeover the meme space with secret formulas.";
    const desc2 = "Mixi launching with zero taxes and locked LP, $MIXI is a coin for the people, forever. Fueled by pure memetic power, and magic cosmic dust, let Mixi rise and shine. Made by veterans."

    return(
        <div className="about__area">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className="about-left">
                            <figure className="about__img">
                                <img src={AboutLefttImg} alt="" />
                            </figure>
                            <h4>pepe? MIXI <span>shib? MIXI</span>doge? MIXI</h4>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about__right_content">
                            <h2>{title}</h2>
                            <p>{desc1}</p>
                            <p>{desc2}</p>
                        </div>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
