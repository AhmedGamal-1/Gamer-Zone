import ProductCard from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import homeStyle from '../Home/Home.module.css';
import Loading from '../../components/Loading/Loading';
import landingImage1 from '../../assets/images/landing1.1.png';
import headSet from '../../assets/images/headset1.png';
import mouse from '../../assets/images/mouse1.png';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

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
            <div className="landing-image position-relative">
                <div className="carousel-inner ">
                    <div className="carousel-item active ">
                        <div className={homeStyle.bigImage}>
                            <img
                                src={landingImage1}
                                className="d-block w-100"
                                alt="..."
                            />
                        </div>
                        <div className={`${homeStyle.flexText}  carousel-caption text-white d-flex justify-content-between mb-5`}>
                            <div className={`${homeStyle.leftContent}`}>
                                <h5
                                    style={{
                                        fontSize: '40px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Chrono Odyssey
                                </h5>
                                <div className="d-grid gap-2 d-md-block mt-3">
                                    <div
                                        className="p-1 bg-secondary text-white rounded-1 d-inline-block mx-1"
                                        style={{ width: '110px' }}
                                    >
                                        Multiplayer
                                    </div>
                                    <div
                                        className="p-1 bg-secondary text-white rounded-1 d-inline-block mx-1"
                                        style={{ width: '110px' }}
                                    >
                                        Massively
                                    </div>
                                    <div
                                        className="p-1 bg-secondary text-white rounded-1 d-inline-block mx-1"
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
                <div className={`${homeStyle.textContent} mb-4`}>
                    <h4 className="fw-bold text-white">Gaming Consoles Collection</h4>
                    <p style={{ color: '#ff4136' }}>
                        The Best in Gaming Consoles
                    </p>
                </div>
                <div className="row justify-content-center align-item-center text-center">
                    {product.length > 0 ? (
                        product.slice(0, 4).map((product, index) => (
                            <div
                                key={index}
                                className={`${homeStyle.card} col-md-6 col-lg-3 col-sm-12 product-card`}
                            >
                              <Link to={`/products/${product.id}`} className={homeStyle.linkStyle}> {' '}
                                <ProductCard product={product}/>
                              </Link>{' '}
                            </div>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center align-items-center p-5 loading">
                            <Loading />
                        </div>
                    )}
                </div>

                <div className="showButton my-5 text-center">
                    <Link to = '/products' className={homeStyle.linkStyle}> {''}
                      <button className={`${homeStyle.showButton} px-3 py-2`}>
                          <span>Show More</span>
                          <i className="fa-solid fa-arrow-right-long text-white"></i>
                      </button>
                    </Link>{' '}
                </div>
            </div>
            {/* End Console Product section */}

            {/* Start Accessory section */}
            <div className="container my-5">
                <div className={`${homeStyle.textContent} mb-4`}>
                    <h4 className="fw-bold text-white">Accessory Favorites</h4>
                    <p style={{ color: '#ff4136' }}>
                        Level Up Your Setup with Our Favorite Accessories
                    </p>
                </div>
                <div className="row justify-content-center align-item-center text-center">
                    {product.length > 0 ? (
                        product.slice(10, 14).map((product, index) => (
                            <div
                                key={index}
                                className={`${homeStyle.card} col-md-6 col-lg-3 col-sm-12 product-card`}
                            >
                              <Link to={`/products/${product.id}`} className={homeStyle.linkStyle}> {' '}
                                <ProductCard product={product}/>
                              </Link>{' '}
                            </div>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center align-items-center p-5 loading">
                            <Loading />
                        </div>
                    )}
                </div>

                <div className="showButton my-5 text-center">
                    <Link to = '/products' className={homeStyle.linkStyle}> {''}
                      <button className={`${homeStyle.showButton} px-3 py-2`}>
                          <span>Show More</span>
                          <i className="fa-solid fa-arrow-right-long text-white"></i>
                      </button>
                    </Link>{' '}
                </div>
            </div>
            {/* End Accessory section */}

            {/* Start Game Section */}

            <div className="container my-5">
                <div className="text-content mb-4">
                    <h4 className={`${homeStyle.textContent} fw-bold text-white`}>Games</h4>
                </div>

                <div className="row justify-content-center align-item-center text-center">
                    {product.length > 0 ? (
                        product.slice(14, 18).map((product, index) => (
                            <div
                                key={index}
                                className={`${homeStyle.card} col-md-6 col-lg-3 col-sm-12 product-card`}>
                              <Link to={`/products/${product.id}`} className={homeStyle.linkStyle}> {' '}
                                <ProductCard product={product}/>
                              </Link>{' '}
                            </div>
                        ))
                    ) : (
                        <div className="d-flex justify-content-center align-items-center p-5 loading">
                            <Loading />
                        </div>
                    )}
                </div>

                <div className="showButton my-5 text-center">
                    <Link to = '/products' className={homeStyle.linkStyle}> {''}
                      <button className={`${homeStyle.showButton} px-3 py-2`}>
                          <span>Show More</span>
                          <i className="fa-solid fa-arrow-right-long text-white"></i>
                      </button>
                    </Link>{' '}
                </div>
            </div>
            {/* End Game Section */}

            {/* Start Keyboard, Mouse And Headsets Section */}
            <div className="container">
                <div className={`mb-5 `}>
                    <h4 className={`${homeStyle.textContent} fw-bold text-white`}>Keyboard, Mouse And Headsets</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className={`${homeStyle.CategoryImage} ${homeStyle.mediaCategory} position-relative`}
                            style={{ width: '400px', border:"1px solid #ff4136", borderTopLeftRadius:"10px", borderTopRightRadius:"10px" }}>
                          <Link to = '/products' className={homeStyle.linkStyle}> {''}
                            <div className="image">
                                <img className="w-100" src={mouse} alt="" />
                            </div>
                            <div className={homeStyle.overLay}>
                              <h5 className='d-flex justify-content-center mt-4 text-white'>Keyboard, Mouse</h5>
                            </div>
                          </Link>{' '}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={`${homeStyle.CategoryImage} ${homeStyle.mediaCategory} position-relative`} style={{ width: '400px', marginLeft: "auto", border:"1px solid #ff4136", borderTopLeftRadius:"10px", borderTopRightRadius:"10px" }}>
                          <Link to = '/products' className={homeStyle.linkStyle}> {''}
                            <div className="image">
                                <img className='w-100' src={headSet} alt="" />
                            </div>
                            <div className={homeStyle.overLay}>
                              <h5 className='d-flex justify-content-center mt-4 text-white'>HeadSets</h5>
                            </div>
                          </Link>{' '}
                        </div>
                    </div>
                </div>
            </div>
            {/* End Keyboard, Mouse And Headsets Section */}
            
        </>
    );
}

export default Home;