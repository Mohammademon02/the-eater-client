import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FcLike } from 'react-icons/fc';


const ChefInfo = ({chefInfo}) => {
    
    const { chefName, chefPicture, likes, numRecipes, yearsExperience } = chefInfo;

    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top"  src={chefPicture} />
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
                        <div>
                            <Link to='/recipes' chefinfo={chefInfo} >
                                <Button variant="secondary">View Recipes
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default ChefInfo;