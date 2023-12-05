import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import howtobuyboximg1 from "../assets/img/wallet.png";
import howtobuyboximg2 from "../assets/img/ethereum.png";
import howtobuyboximg3 from "../assets/img/uniswap.png";
import howtobuyboximg4 from "../assets/img/switch_mixi.png";
import howtobuyboximg5 from "../assets/img/vibe.png";
export default function HowToBuy(){
    const title = "HOW TO BUY";

    const HowToBuyContentBoxs = [
        {
            img : howtobuyboximg1,
            title: 'CREATE A WALLET',
            desc: 'Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.',
        },
        {
            img : howtobuyboximg2,
            title: 'GET SOME ETH',
            desc: 'Have ETH in your wallet to switch to $MIXI. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.',
        },
        {
            img : howtobuyboximg3,
            title: 'GO TO UNISWAP',
            desc: 'Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $MIXI token address into Uniswap, select MIXI, and confirm. When Metamask prompts you for a wallet signature, sign.',
        },
        {
            img : howtobuyboximg4,
            title: 'SWITCH ETH FOR $MIXI',
            desc: 'Switch ETH for $MIXI. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.',
        },
        {
            img : howtobuyboximg5,
            title: 'VIBE, SHILL, HOLD, EVERYBODY HOLD',
            desc: 'this is the sweetest part of it, spread the positivity about project, tell your friends about, tell your mother about, tell your GF about (maybe not), put $MIXI stickers everywhere, share it everywhere, follow the chart and enjoy it.',
        },
    ]
    return(
        <div className="howtobuy__area">
            <Container>
                <Row>
                    <Col>
                        <div className="section__title">
                            <h2>{title}</h2>
                        </div>
                        <div className="howtobuy__content__wrapper">

                            {HowToBuyContentBoxs.map((HowToBuyContentBox, item)=>(
                                <div className="howtobuy__single__box d-flex" key={item}>
                                    <figure className="about__img">
                                        <img src={HowToBuyContentBox.img} alt="" />
                                    </figure>
                                    <div className="box__content">
                                        <h4>{HowToBuyContentBox.title}</h4>
                                        <p>{HowToBuyContentBox.desc}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Col>
                </Row>   
            </Container>
        </div>
    )
}
