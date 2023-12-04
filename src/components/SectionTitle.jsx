import { React } from 'react'
import { Row, Col } from 'react-bootstrap'

export default function SectionTitle({title,des}){
    return(
        <Row className='justify-content-center text-center'>
            <Col lg={10}>
                <div className="section__title">
                    <h2> {title} </h2>
                    <p> {des} </p>
                </div>
            </Col>
        </Row>
    )
}