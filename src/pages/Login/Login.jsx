import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { BsGoogle, BsGithub } from 'react-icons/bs';



const Login = () => {
    const [error, setError] = useState('')

    const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const googleUser = result.user
                console.log(googleUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const githubUser = result.user
                console.log(githubUser)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }


    return (
        <Container className='w-25 mx-auto my-5'>
            <h3>Please Login to enter The Eater</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="success" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <br />
                <div className='mt-3'>
                    <Button className='me-3' onClick={handleGoogleSignIn} variant="success" type="submit">
                        <BsGoogle></BsGoogle>
                    </Button>
                    <Button onClick={handleGithubSignIn} variant="success" type="submit">
                        <BsGithub></BsGithub>
                    </Button>
                </div>
                <br />
                <Form.Text className="text-danger fw-bold">
                    {error}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;