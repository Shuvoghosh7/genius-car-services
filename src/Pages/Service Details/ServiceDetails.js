import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()

    return (
        <div>
            <h1>Depails page:{serviceId}</h1>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-primary'>proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;