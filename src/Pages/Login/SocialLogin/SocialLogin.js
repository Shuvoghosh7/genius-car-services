import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { GrGithub} from 'react-icons/gr';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
const SocialLogin = () => {
    const navigate =useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorElement;
    if (error || error1) {
        errorElement= 
        <p>Error: {error?.message}{error1?.message}</p>
      }
      if (loading || loading1) {
        return <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>;
      }
      if(user || user1){
        navigate('/')
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button className='btn w-75 border border-dark rounded-pill d-block mx-auto mb-3' onClick={()=>signInWithGoogle()}><span><FcGoogle className='h4 mx-2'/></span> Google Sing In
                </button>
                <button className='btn w-75 border border-dark rounded-pill d-block mx-auto mb-3'><span><BsFacebook className='h4 mx-2'/></span> Facebook sing 
                </button>
                <button className='btn w-75 border border-dark rounded-pill d-block mx-auto' onClick={()=>signInWithGithub()}><span><GrGithub className='h4 mx-2'/></span>Git Hub sing in
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;