import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Register = () => {
    const[agree,setAgree]=useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);
    const navaget=useNavigate()
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    if(user){
        console.log(user)
    }
    const handelSubmit =async (event)=>{
        event.preventDefault()
    /*    const name=event.target.name.value
       const email=event.target.email.value
       const password=event.target.password.value */
       const name = nameRef.current.value
       const email = emailRef.current.value
       const password = passwordRef.current.value
       
      await createUserWithEmailAndPassword(email, password)
      await updateProfile({ displayName:name });
      navaget('/')
      console.log('Updated profile');
    
     
     
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
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={()=>setAgree(!agree)} type="checkbox" 
                    label ="Accept Genius Car service term and condition"
                     />
                </Form.Group> */}
                <input onClick={()=>setAgree(!agree)} type="checkbox" name="" id="" />
                {/* <label className={agree? 'text-primary ps-2':'text-danger ps-2'}>Accept Genius Car service term and condition</label> */}
                <label className={`ps-2 ${agree? '':'text-danger'}`}>Accept Genius Car service term and condition</label>

                <Button disabled={!agree} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <p>Alrady have an Account? <Link to='/login' className='text-danger text-decoration-none'>Please Login</Link></p>
        <SocialLogin/>
        </div>
    );
};

export default Register;