import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../Hooks/useServiceDetails';


const ServiceDetails = () => {
    const { serviceId } = useParams()
    const[service]=useServiceDetails(serviceId)

    return (
        <div>
            <h1>Depails page:{service.name}</h1>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;