import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navaget=useNavigate()
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    if(user){
        navaget('/')
    }
    const handelSubmit =(event)=>{
        event.preventDefault()
    /*    const name=event.target.name.value
       const email=event.target.email.value
       const password=event.target.password.value */
       const name = nameRef.current.value
       const email = emailRef.current.value
       const password = passwordRef.current.value
       createUserWithEmailAndPassword(email, password)
     
    }
    return (
        <div className='container w-25 mx-auto'>
            <h1 className='text-primary text-center'>Plrase Login</h1>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef}  type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <p>Alrady have an Account? <Link to='/login' className='text-danger text-decoration-none'>Please Login</Link></p>
        <SocialLogin/>
        </div>
    );
};

export default Register;