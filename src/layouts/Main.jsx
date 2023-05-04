import React from 'react';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet>
                {/* <Container>
                    <Row>
                        <Col sm={9}>
                            <h1>main content coming...</h1>
                        </Col>
                        <Col sm={3}>
                            <h1>right side content coming soon...</h1>
                        </Col>
                    </Row>
                </Container> */}
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;