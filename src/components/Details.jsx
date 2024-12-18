import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

function DetailsPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const { companyName } = useParams();

    const item = location.state?.item;

    return (
        <div>
        <h1>Details for {companyName}</h1>
        <p>This is where the company details will be displayed.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
}

export default DetailsPage;
