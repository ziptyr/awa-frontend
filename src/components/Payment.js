import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import { Context } from './Context';
import styles from './Payment.module.css';

export default function Payment({payment, setPayment}) {

    const context = useContext(Context);

    const inputs = {
        'online_bank': 'Online Bank',
        'debit_card': 'Debit Card',
        'credit_card': 'Credit Card'
    };

    function PaymentOptions() {
        return (
            <div>
                {Object.keys(inputs).map((key) => {
                    return (
                        <>
                            <input
                                onChange={(e) => setPayment(e.target.value)}
                                type='radio'
                                name='payment'
                                id={key}
                                checked={(payment === key) ? 'checked' : null}
                                value={key} />
                            <label for={key}>{inputs[key]}</label>
                        </>
                    )
                })}
            </div>
        )
    }

    return (
        <div>
            <PaymentOptions />

            {(payment) ? (
                <Link to='/'>
                    <button
                        onClick={() => {
                            if (payment) {
                                context.empty();
                            } else {
                                alert("Choose a payment method first");
                            }
                        }}>
                            Pay
                    </button>
                </Link>
            ) : null}
        </div>
    )
}
