import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ChefRecipesDetails = ({ recipes }) => {
    const [disable, setDisable] = useState(true);
    console.log(recipes)
    const { recipeName, ingredients, cookingMethod, rating } = recipes


    const notify = () => {
        toast("Added to favorite items");
        setDisable(false)

    }

    return (
        <div>
            <Card className='me-2 mb-2' border="primary" >
                <Card.Body>
                    <Card.Title>{recipeName}</Card.Title>
                    <Card.Text>
                        Ingredients :
                        <li>{ingredients[0]}</li>
                        <li>{ingredients[2]}</li>
                        <li>{ingredients[3]}</li>
                        <li>{ingredients[4]}</li>
                        <li>{ingredients[5]}</li>
                    </Card.Text>
                    <Card.Text>
                        Cooking Method :{cookingMethod}
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between' >
                        <div>
                            Rating : {rating}
                        </div>
                        <div>
                            <Button onClick={notify}
                                disabled={!disable}
                                variant="success">Add to Favorite
                            </Button>
                            <ToastContainer />

                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ChefRecipesDetails;