import { useParams } from 'react-router-dom';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import { BallTriangle } from 'react-loader-spinner';
import './ProductDetails.css';
function ProductDetails() {
    let { id } = useParams();
    const [item, setItem] = useState();
    const [fav, setFav] = useState();
    const [catg, setCatg] = useState();
    const { isFavorite } = useFavorites();
    useEffect(() => {
        axios
            .get('http://localhost:2024/products')
            .then((res) => {
                const foundItem = res.data.find((el) => el.id === id);
                setItem(foundItem);
                setFav(isFavorite(foundItem?.id));
                setCatg(foundItem?.category);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [id, isFavorite, catg]);

    if (!item)
        return (
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#fa5950"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass="BallTriangle"
                visible={true}
            />
        );

    return (
        <>
            {item && (
                <SingleProduct
                    item={item}
                    catg={catg}
                    fav={fav}
                ></SingleProduct>
            )}
            <div className="container-fluid">
                <div className="titleProduct">Discover</div>
                <iframe
                    width="560"
                    height="315"
                    className="video"
                    src={`https://www.youtube.com/embed/${item.video}`}
                    title="YouTube Video Player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <div className="titleProduct">You may also like </div>
            </div>
        </>
    );
}

export default ProductDetails;
