import { useEffect, useRef, useState } from 'react';

export default function Paypal() {
    const [payed, setPayed] = useState(false);
    const paypal = useRef();

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, action) => {
                    return action.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: 2.0,
                                },
                            },
                        ],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log('Order ID: ' + order.id);
                    setPayed(true); // Update the state to indicate payment is completed
                },
                onError: (err) => {
                    console.log(err);
                },
            })
            .render(paypal.current);
    }, []); // Run effect only once when component mounts

    useEffect(() => {
        console.log(payed); // Log the updated value of 'payed' whenever it changes
    }, [payed]); // Run effect whenever 'payed' changes
    if (!payed) return <div ref={paypal}>Paypal</div>;
    else {
        return (
            <div
                className="d-flex align-items-center justify-content-center bg-success text-white rounded p-3 mx-auto mt-5"
                style={{ width: '500px', height: '150px' }}
            >
                <div>
                    <i className="fas fa-check-circle fa-3x mr-3"></i>
                </div>
                <div>
                    <h5>Payment Successful!</h5>
                    <p>Your payment has been processed successfully.</p>
                </div>
            </div>
        );
    }
}
