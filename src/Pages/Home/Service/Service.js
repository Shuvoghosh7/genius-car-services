import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const{id,name,img,price,description}=service
    const navigate=useNavigate()
    const navegateToserviceDetails =(DetailsId)=>{
      navigate(`/service/${DetailsId}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price;{price}</p>
            <p>{description}</p>
            <button onClick={()=>navegateToserviceDetails(id)}>Book:{name}</button>
        </div>
    );
};

export default Service;