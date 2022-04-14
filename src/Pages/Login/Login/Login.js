
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail,sending] = useSendPasswordResetEmail(
        auth
      );
    const navigate = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const location =useLocation()
    let from=location.state?.from?.pathname || "/"
    if(loading || sending){
        return <Loading/>
    }
    if(user){
        navigate(from,{replase:true})
    }
   
    let errorElement;
    if (error) {
        errorElement=
            <p className='text-danger'>Error: {error?.message}</p>
      }
     
    const handelSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    const resatePassword= async()=>{
        const email = emailRef.current.value
        if(email){
        await sendPasswordResetEmail(email);
        toast('Sent email');
        }else{
            toast("please enter your email address")
        }
    }
    return (
        <div className='container w-25 mx-auto'>
            <h1 className='text-primary text-center'>Plrase Login</h1>
            <Form onSubmit={handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Genius Car service term and condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {errorElement}
            </Form>
            
            <p>New to Genius Car? <Link to='/register' className='text-danger text-decoration-none'>Please Reagister</Link></p>
            <p>Are you Forget password? <button  className='text-danger text-decoration-none btn'><span onClick={resatePassword}>Reset Password</span></button></p>
            <SocialLogin/>
            <ToastContainer />
        </div>
    );
};

export default Login;