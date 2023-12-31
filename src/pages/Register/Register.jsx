import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, updateUserData } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(name, photo, email, password)
        updateUserData( name, photo)
        setError('');
        if (password !== confirm) {
            setError('Your password did not match')
            return
        }
        else if (password.length < 6) {
            setError('Password must be 6 characters or more')
            return
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setError('')
                
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

       
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-25 mx-auto my-5'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Confirm password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name="accept"
                        label={<>Accept <Link to="/terms">Terms and Conditions</Link> </>} />
                </Form.Group>
                <Button variant="success" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-danger fw-bold">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;