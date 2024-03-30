import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Products from '../../pages/Products/Products';
import NewNav from '../Navbar/NewNavbar';

export default function Payed() {
    return (
        <>
            <NewNav className="mb-5"></NewNav>
            <div className="text-center" style={{ marginTop: '150px' }}>
                <h1>Transaction Completed</h1>
                <CheckCircleIcon
                    style={{ fill: 'white', width: '50px', height: '50px' }}
                ></CheckCircleIcon>
            </div>
            <div
                className="mx-auto mt-3 mb-3"
                style={{
                    width: '90%',
                    height: '15px',
                    backgroundColor: 'green',
                    borderRadius: '15px',
                }}
            ></div>
            <Products></Products>
        </>
    );
}
