import React from 'react';
import banner from '../../../assets/banner.png'
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <section className=''>
            <div className='container p-2 d-flex'>
                <img className='img-fluid' src={banner} alt="" />
            </div>
            <Container>
                <Row>
                    <Col sm={9}>
                        <h1>main content coming...</h1>
                    </Col>
                    <Col sm={3}>
                        <h1>right side content coming soon...</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Home;