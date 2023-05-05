import React, { useEffect, useState } from 'react';
import banner from '../../../assets/banner.png'
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import ChefInfo from './ChefInfo/ChefInfo';
import RightSide from '../RightSide/RightSide';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';


const Home = () => {

    const [chefInfo, setChefInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefInfo(data))
            .catch(error => console.error(error))
    }, [])

    const { loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner animation="grow" variant="secondary" />
    }

    return (
        <section >
            <div >
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