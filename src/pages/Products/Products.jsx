import { useEffect, useState } from 'react';
import ProductCard from '../../components/Card/Card';
import './Products.css';
import Loading from '../../components/Loading/Loading';
import PaginationControlled from '../../components/Pagination/PaginationControlled';
import { Link } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrnetPage] = useState(1);
    const [postsPerPage] = useState(8);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:2024/products');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    // reset scroll to top
    window.scrollTo(0, 0);

    // pagination
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = products.slice(firstPostIndex, lastPostIndex);

    return (
        <div className="mt-5">
            <div className="container-fluid">
                <div className="row gy-5 ">
                    {/* side bar filter */}
                    <div className="col-lg-2 sidebar text-light">
                        <div className="bg-light text-black ">sidebar</div>
                    </div>

                    {/* products */}

                    <div className="col-lg-10 products">
                        <div className="row gy-5 ">
                            {/* Loading spinner */}
                            {currentPosts.length === 0 && (
                                <div className="d-flex justify-content-center align-items-center p-5 loading">
                                    <Loading />
                                </div>
                            )}

                            {/* Display products */}
                            {currentPosts &&
                                currentPosts.map((product) => {
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
                {/* pagination */}
                <div className="pagination-container my-3 ">
                    <PaginationControlled
                        totalPosts={products.length}
                        postsPerPage={postsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrnetPage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Products;
