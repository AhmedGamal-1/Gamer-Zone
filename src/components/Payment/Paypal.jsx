import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { gamesAction } from '../../redux/store/getAllData';

// import './payment.css';
import { useCart } from '../../context/CartContext';
export default function Paypal({ price }) {
    // const { id } = useParams();
    const [payed, setPayed] = useState(false);
    const paypal = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cart } = useCart();
    console.log(cart);
    useEffect(() => {
        dispatch(gamesAction());
    }, [dispatch]);
    // const games = useSelector((state) => state.allGames.games);
    // let oneGame = games.find((game) => game.id == id);

    useEffect(() => {
        window.paypal
            .Buttons({
                createOrder: (data, action) => {
                    return action.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: price,
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
    }, []);
    useEffect(() => {
        console.log(payed);
    }, [payed]);
    // if (!payed)
    //     return (
    //         <div
    //             className="d-flex justify-content-center align-items-center "
    //             style={{ height: '100vh' }}
    //         >
    //             <Loading></Loading>
    //         </div>
    //     );
    if (!payed)
        return (
            // <div className=" mt-5 ">
            //     <div style={{ marginBottom: '150px' }}></div>
            //     <div className="container">
            //         <div
            //             className="row"
            //             style={{
            //                 backgroundColor: '#252525',
            //                 borderRadius: '35px',
            //             }}
            //         >
            //             <div className="col-9 d-flex">
            //                 {cart.length > 0 ? (
            //                     cart.map((product) => {
            //                         return (
            //                             <div className="col-4" key={product.id}>
            //                                 <ProductCard
            //                                     product={product}
            //                                 ></ProductCard>
            //                             </div>
            //                         );
            //                     })
            //                 ) : (
            //                     <div className="col-12 d-flex justify-content-center align-items-center flex-column">
            //                         <h1>No Products In Your Cart</h1>
            //                         <div className="mt-5">
            //                             <Button
            //                                 variant="outlined"
            //                                 onClick={() => [
            //                                     navigate('/products'),
            //                                 ]}
            //                             >
            //                                 Discover More Products
            //                             </Button>
            //                         </div>
            //                     </div>
            //                 )}
            //             </div>
            //             <div className="col-3  d-flex justify-content-center align-items-center">
            //                 <div
            //                     className="me-3"
            //                     style={{
            //                         height: '100%',
            //                         backgroundColor: '#fff',
            //                         borderRadius: '15px',
            //                         padding: '2px',
            //                     }}
            //                 ></div>
            <div className="mt-5" ref={paypal}></div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    else if (payed) {
        return <>{navigate('/payed')}</>;
    }
}
