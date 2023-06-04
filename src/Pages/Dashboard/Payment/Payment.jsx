import React from 'react';
import CheckOutForm from './CheckOutForm/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {

    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat( total.toFixed(2))
        return (
        <div className="mt-8">
            <h2 className="text-4xl font-bold text-center">Pay Your bill and checkout</h2>
            <Elements stripe={stripePromise}>
            <CheckOutForm 
            cart={cart}
            price={price}></CheckOutForm>

            </Elements>
        </div>
    );
};

export default Payment;