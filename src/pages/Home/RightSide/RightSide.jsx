import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const RightSide = () => {
    return (
        <section>
            <div>
                <h3>Most Popular Items</h3>
                <ol>
                    <li>Chicken and Mushroom Pie</li>
                    <li>Chocolate Cake</li>
                    <li>Lemon Roasted Chicken</li>
                    <li>Beef Wellington</li>
                    <li>Beef Bourguignon</li>
                </ol>
            </div>
            <div>
                <div>
                    <h4 className='mt-5'>Find us on</h4>
                    <ListGroup>
                        <ListGroup.Item> <FaFacebook></FaFacebook> facebook</ListGroup.Item>
                        <ListGroup.Item> <FaTwitter></FaTwitter> twitter </ListGroup.Item>
                        <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>
                    </ListGroup>
                </div>
            </div>
        </section>
    );
};

export default RightSide;