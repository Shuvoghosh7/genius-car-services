import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h1>Depails page:{serviceId}</h1> 
        </div>
    );
};

export default ServiceDetails;