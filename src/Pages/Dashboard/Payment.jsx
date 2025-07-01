import React from 'react';
import SectionTittle from '../../Components/SectionTittle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';

const Payment = () => {


    const stripePromise = loadStripe(import.meta.env.VITE_Payment_gateway_pk);
    


    return (
        <div>
            <SectionTittle heading="payment" subHeading="Get a payment" ></SectionTittle>
            <div>
                <Elements stripe={stripePromise}>
                       <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;