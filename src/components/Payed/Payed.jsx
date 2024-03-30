import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import Products from '../../pages/Products/Products';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Payed() {
    const navigate = useNavigate();
    return (
        <>
            <div className="text-center" style={{ marginTop: '150px' }}>
                <h1>Transaction Completed</h1>
                <div>
                    <CheckCircleIcon
                        style={{ fill: 'white', width: '50px', height: '50px' }}
                    ></CheckCircleIcon>
                </div>
                <Button
                    onClick={() => {
                        navigate('/');
                    }}
                    variant="contained"
                    className="mt-3"
                >
                    Home
                </Button>
            </div>
            <div
                className="mx-auto mt-3 mb-3"
                style={{
                    width: '90%',
                    height: '15px',
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                }}
            ></div>

            {/* <Products></Products> */}
        </>
    );
}
