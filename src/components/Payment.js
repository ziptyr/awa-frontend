import React, { useState } from 'react';
import styles from './Payment.module.css';
import App from '../App';

export default function Payment({payment, setPayment}) {

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
                <button
                    onClick={() => {
                        if (payment) {
                            alert(payment);
                        } else {
                            alert("Choose a payment method first");
                        }
                    }}>
                        Pay
                </button>
            ) : null}
        </div>
    )
}
