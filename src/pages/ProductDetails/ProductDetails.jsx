import { useParams } from 'react-router-dom';
import SingleProduct from '../../components/SingleProduct/SingleProduct';

function ProductDetails() {
    const { id } = useParams();
    return (
        <>
            <SingleProduct id={id}></SingleProduct>
        </>
    );
}

export default ProductDetails;
