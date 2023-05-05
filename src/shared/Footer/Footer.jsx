import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TbCopyright } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-success bg-opacity-25 text-center p-4 mt-5'>
            <Container className='text-center'>
                <div className=" text-center">
                    <Link className='me-4 ' style={{ fontSize: '1.8rem' }}><FaFacebook></FaFacebook></Link>
                    <Link className='me-4' style={{ fontSize: '1.8rem' }}><FaGithub className='text-black'></FaGithub></Link>
                    <Link className='me-4 ' style={{ fontSize: '1.8rem' }}><FaLinkedin className='text-info'></FaLinkedin></Link>
                    <Link style={{ fontSize: '1.8rem' }}><FaInstagram className='text-danger'></FaInstagram></Link>
                </div><br />
                <div className='d-flex gap-3 text-center align-items-center justify-content-center'>
                    <button className='text-decoration-none text-black border-0 bg-transparent'>Home</button>
                    <button className='text-decoration-none text-black border-0 bg-transparent'>About</button>
                    <button className='text-decoration-none text-black border-0 bg-transparent'>Blog</button>
                    <button className='text-decoration-none text-black border-0 bg-transparent'>Services</button>
                    <button className='text-decoration-none text-black border-0 bg-transparent'>Team</button>
                </div><br />
                <p><small><TbCopyright style={{ fontSize: '24px' }} /> copyright by The Eater</small></p>
            </Container>
        </div>
    );
};

export default Footer;