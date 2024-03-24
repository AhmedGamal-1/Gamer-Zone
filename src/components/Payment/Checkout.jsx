import { useState } from 'react';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';

const Checkout = () => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: 'resetOptions',
            value: {
                ...options,
                currency: value,
            },
        });
    };

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: '8.99',
                    },
                },
            ],
        });
    };

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            alert(`Transaction completed by ${name}`);
        });
    };

    return (
        <div className="checkout  w-50 mx-auto border p-4">
            {isPending ? (
                <p>LOADING...</p>
            ) : (
                <>
                    <div className=" w-25 mx-auto ">
                        <h5 className="d-d-inline-block ">Choose Currency</h5>
                        <select
                            className="bg-bg-danger rounded p-2 m-2  "
                            value={currency}
                            onChange={onCurrencyChange}
                        >
                            <option value="USD">💵 USD</option>
                            <option value="EUR">💶 Euro</option>
                        </select>
                    </div>
                    <PayPalButtons
                        style={{ layout: 'vertical' }}
                        createOrder={(data, actions) =>
                            onCreateOrder(data, actions)
                        }
                        onApprove={(data, actions) =>
                            onApproveOrder(data, actions)
                        }
                    />
                </>
            )}
        </div>
    );
};

export default Checkout;
