import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { gamesAction } from '../../redux/store/getAllData';
import Loading from '../Loading/Loading';

export default function Paypal() {
    const { id } = useParams();
    const [payed, setPayed] = useState(false);
    const paypal = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(gamesAction());
    }, [dispatch]);
    const games = useSelector((state) => state.allGames.games);
    let oneGame = games.find((game) => game.id == id);

    useEffect(() => {
        if (oneGame)
            window.paypal
                .Buttons({
                    createOrder: (data, action) => {
                        return action.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: oneGame.price,
                                    },
                                },
                            ],
                        });
                    },
                    onApprove: async (data, actions) => {
                        const order = await actions.order.capture();
                        console.log('Order ID: ' + order.id);
                        setPayed(true);
                    },
                    onError: (err) => {
                        console.log(err);
                    },
                })
                .render(paypal.current);
    }, [oneGame]);
    if (!oneGame)
        return (
            <div
                className="d-flex justify-content-center align-items-center "
                style={{ height: '100vh' }}
            >
                <Loading></Loading>
            </div>
        );
    if (!payed)
        return (
            <div className="w-25 mt-5 mx-auto">
                <div ref={paypal}>
                    <img src="ps5.jpg" alt="money"></img>
                </div>
            </div>
        );
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
