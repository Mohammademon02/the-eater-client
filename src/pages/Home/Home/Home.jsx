import React, { useEffect, useState } from 'react';
import banner from '../../../assets/banner.png'
import { Col, Container, Row } from 'react-bootstrap';
import ChefInfo from './ChefInfo/ChefInfo';
import RightSide from '../RightSide/RightSide';

const Home = () => {

    const [chefInfo, setChefInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefInfo(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <section className=''>
            <div className=''>
                <img className='w-100' src={banner} alt="" />
            </div>
            <Container>
                <Row className='mt-5'>
                    <Col sm={9}>
                        <Row sm={1} md={2} lg={3} className="g-4">
                            {
                                chefInfo.map(chefInfo => <ChefInfo
                                    chefInfo={chefInfo}
                                    key={chefInfo.id}
                                ></ChefInfo>)
                            }
                        </Row>
                    </Col>
                    <Col sm={3}>
                        <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Home;