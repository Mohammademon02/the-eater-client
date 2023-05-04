import React from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';


const ChefRecipes = () => {
    // const {id} = useParams();
    // console.log(id)

    const recipes = useLoaderData(); 
    const { bio, chefName, chefPicture, yearsExperience, numRecipes, likes  } =  recipes;
    return (
        <Container >
            <Row className='mt-5'>
                <Col sm={6}>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={chefPicture} />
                            <Card.Body>
                                <Card.Title>{chefName}</Card.Title>
                                <Card.Text>
                                    <span className='fw-semibold'>Experience :</span>  {yearsExperience} years
                                </Card.Text>
                                <Card.Text>
                                    <span className='fw-semibold'>Recipes :</span> {numRecipes}
                                </Card.Text>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div>
                                        <FcLike style={{ fontSize: '2rem' }}></FcLike> {likes}
                                    </div>
                                </div>
                                <Card.Text>
                                    <span className='fw-semibold'>Recipes :</span> {bio}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
                <Col sm={6}>
                    <Row sm={1} md={2} lg={3} className="g-4">
                        
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default ChefRecipes;









