import { useEffect, useState } from 'react';
import ProductCard from '../../components/Card/Card';
import './Products.css';

function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:3000/products');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <div className="mt-5">
            <div className="container-fluid">
                <div className="row gy-5 ">
                    <div className="col-lg-2 sidebar text-light">
                        <div className="bg-light text-black ">sidebar</div>
                    </div>
                    <div className="col-lg-10">
                        <div className="row gy-5 ">
                            {products &&
                                products.map((product) => {
                                    return (
                                        <div
                                            key={product.id}
                                            className="col-md-4 col-lg-4 col-xl-3 col-sm-6"
                                        >
                                            <ProductCard product={product} />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
