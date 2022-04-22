import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{_id,name,img,price,description}=service
    const navigate=useNavigate()
    const navegateToserviceDetails =(Details_id)=>{
      navigate(`/service/${Details_id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p>{description}</p>
            <button onClick={()=>navegateToserviceDetails(_id)}>Book:{name}</button>
        </div>
    );
};

export default Service;