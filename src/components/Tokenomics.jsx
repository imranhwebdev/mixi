import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import tokenomicsImg from "../assets/img/tokenomics.png";
export default function Tokenomics(){
    const title = "TOKENOMICS";

    const tokenomicsContentBoxs = [
        {
            title: 'Token Name:',
            desc: 'Mixi Coin',
        },
        {
            title: 'Symbol:',
            desc: '$MIXI',
        },
        {
            title: 'Total Supply:',
            desc: '69,000,000,000',
        },
        {
            title: 'Decimal:',
            desc: 18,
        },
        {
            title: 'Contract Address:',
            desc: '0x15228A9EBEe76...',
        },
        {
            title: 'Prediction:',
            desc: 'Moon',
        },
    ]
    return(
        <div className="tokenomics__area">
            <Container>
                <Row>
                    <Col md="6">
                        <div className="section__title">
                            <h2>{title}</h2>
                        </div>
                        <div className="tokenomics__content__wrapper">
                            {tokenomicsContentBoxs.map((tokenomicsContentBox, item)=>(
                                <div className="tokenomics__single__box d-flex" key={item}>
                                        <h4>{tokenomicsContentBox.title}</h4>
                                        <p>{tokenomicsContentBox.desc}</p>
                                </div>
                            ))}

                        </div>
                    </Col>
                    <Col md="6">
                        <figure>
                            <img src={tokenomicsImg} alt="" />
                        </figure>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
