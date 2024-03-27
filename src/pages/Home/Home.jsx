import ProductCard from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import homeStyle from '../Home/Home.module.css';
import Loading from '../../components/Loading/Loading';
import landingImage1 from '../../assets/images/landing1.1.png';
import headSet from '../../assets/images/headset1.png';
import mouse from '../../assets/images/mouse1.png';

function Home() {
    let [product, setProducts] = useState([]);

    async function getProductData() {
        let { data } = await Axios.get('http://localhost:2024/products');
        console.log(data);
        setProducts(data);
    }

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <>
            {/* Start landing-image section */}
            <div className="landing-image">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className={homeStyle.bigImage}>
                            <img
                                src={landingImage1}
                                class="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div class="carousel-caption text-white d-flex justify-content-between mb-5">
                            <div className="left-content">
                                <h5
                                    style={{
                                        fontSize: '40px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Chrono Odyssey
                                </h5>
                                <div class="d-grid gap-2 d-md-block mt-3">
                                    <div
                                        class="p-1 bg-secondary text-white rounded-1 d-inline-block mx-1"
                                        style={{ width: '110px' }}
                                    >
                                        Multiplayer
                                    </div>
                                    <div
                                        class="p-1 bg-secondary text-white rounded-1 d-inline-block mx-1"
                                        style={{ width: '110px' }}
                                    >
                                        Massively
                                    </div>
                                    <div
                                        class="p-1 bg-secondary text-white rounded-1 d-inline-block mx-1"
                                        style={{ width: '110px' }}
                                    >
                                        Beat em Up
                                    </div>
                                </div>
                            </div>
                            <p className="fw-bold" style={{ fontSize: '20px' }}>
                                Free
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End landing-image section */}

            {/* Start Console Product section */}
            <div className="container" style={{ marginTop: '100px' }}>
                <div className="text-content mb-4">
                    <h4 className="fw-bold">Gaming Consoles Collection</h4>
                    <p style={{ color: '#ff4136' }}>
                        The Best in Gaming Consoles
                    </p>
                </div>
                <div className="row justify-content-center align-item-center text-center">
                    {product.length > 0 ? (
                        product.slice(0, 4).map((product, index) => (
                            <div
                                key={index}
                                className="col-md-6 col-lg-3 col-sm-12 product-card"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center align-items-center p-5 loading">
                            <Loading />
                        </div>
                    )}
                </div>

                <div className="showButton my-5 text-center">
                    <button className="btn btn-outline-danger px-3 py-2">
                        <span>Show More</span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>
            {/* End Console Product section */}

            {/* Start Accessory section */}
            <div className="container my-5">
                <div className="text-content mb-4">
                    <h4 className="fw-bold">Accessory Favorites</h4>
                    <p style={{ color: '#ff4136' }}>
                        Level Up Your Setup with Our Favorite Accessories
                    </p>
                </div>
                <div className="row justify-content-center align-item-center text-center">
                    {product.length > 0 ? (
                        product.slice(10, 14).map((product, index) => (
                            <div
                                key={index}
                                className="col-md-6 col-lg-3 col-sm-12 product-card"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center align-items-center p-5 loading">
                            <Loading />
                        </div>
                    )}
                </div>

                <div className="showButton my-5 text-center">
                    <button className="btn btn-outline-danger px-3 py-2">
                        <span>Show More</span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>
            {/* End Accessory section */}

            {/* Start Game Section */}

            <div className="container my-5">
                <div className="text-content mb-4">
                    <h4 className="fw-bold">Games</h4>
                </div>

                <div className="row justify-content-center align-item-center text-center">
                    {product.length > 0 ? (
                        product.slice(14, 18).map((product, index) => (
                            <div
                                key={index}
                                className="col-md-6 col-lg-3 col-sm-12 product-card"
                            >
                                <ProductCard product={product} />
                            </div>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center align-items-center p-5 loading">
                            <Loading />
                        </div>
                    )}
                </div>

                <div className="showButton my-5 text-center">
                    <button className="btn btn-outline-danger px-3 py-2">
                        <span>Show More</span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>
            {/* End Game Section */}

            {/* Start Keyboard, Mouse And Headsets Section */}
            <div className="container">
                <div className="text-content mb-5">
                    <h4 className="fw-bold">Keyboard, Mouse And Headsets</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div
                            className="left-category-image position-relative"
                            style={{ width: '400px', border:"1px solid #ff4136", borderTopLeftRadius:"10px", borderTopRightRadius:"10px" }}>
                            <div className="image">
                                <img className="w-100" src={mouse} alt="" />
                            </div>
                            <div className={homeStyle.overLay}>
                              <h5 className='d-flex justify-content-center mt-4'>Keyboard, Mouse</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="right-category-image position-relative" style={{ width: '400px', marginLeft: "auto", border:"1px solid #ff4136", borderTopLeftRadius:"10px", borderTopRightRadius:"10px" }}>
                            <div className="image">
                                <img className='w-100' src={headSet} alt="" />
                            </div>
                            <div className={homeStyle.overLay}>
                              <h5 className='d-flex justify-content-center mt-4'>HeadSets</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Keyboard, Mouse And Headsets Section */}
        </>
    );
}

export default Home;

// <div className="continer-fluid">
//                 <div className="image">
//                     <img src={landingImage} alt="..." />
//                 </div>
//             </div>
//             <div>hi</div>
// <div className="row justify-content-center align-item-center text-center">
//     {product.length > 0 ?product.map((product, index)=> <div key={index} className="col-md-3">
//         {/* <div className="product">
//         <h6 className="fw-bold">{product.name}</h6>
//         <img className="w-100 border" src={product.image} alt="" />
//         <p>{product.description}</p>
//         </div> */}
//         <ProductCard
//             product={product} />
//     </div>):<Loading/>}
// </div>
