import axios from 'axios';
import './SingleProduct.css';
import { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useFavorites } from '../../context/FavoritesContext';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
export default function SingleProduct({ id }) {
    const [item, setItem] = useState();
    const [fav, setFav] = useState();
    const [catg, setCatg] = useState();
    const { favorites, toggleFavorite, isFavorite } = useFavorites();

    console.log(favorites);

    //rating icon
    const CustomEmptyIcon = () => (
        <StarBorderIcon style={{ color: 'var(--text-color)' }} />
    );
    //fav toggle
    const handleToggle = () => {
        toggleFavorite(item);
    };
    useEffect(() => {
        axios
            .get('http://localhost:2024/products')
            .then((res) => {
                const foundItem = res.data.find((el) => el.id === id);
                setItem(foundItem);
                setFav(isFavorite(foundItem?.id));
                setCatg(foundItem?.category);
                console.log(catg);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [id, isFavorite, catg]);

    return item && catg === 'consoles' ? (
        <div className="singleProductConsoles">
            {item && (
                <div className="container-fluid">
                    <div className="row g-lg-5 gy-5">
                        <div className="col-md-6">
                            <div className="img">
                                <img src={`/images/${item.poster}`}></img>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content">
                                <div className="name">{item.name}</div>
                                <div className="catg">
                                    <div>Microsoft Studios </div>
                                    <div className="rect"></div>
                                    <div>{item.category}</div>
                                    <div className="rect"></div>
                                    <div className="rating">
                                        <Rating
                                            name="half-rating"
                                            defaultValue={item.rating}
                                            precision={0.5}
                                            readOnly
                                            emptyIcon={<CustomEmptyIcon />}
                                            sx={{
                                                color: 'var(--text-color) ',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="desc">{item.description}</div>
                                <div className="buttons">
                                    <button className="product-btn">
                                        <span>BUY</span>
                                        <span>{item.price} EGP</span>
                                    </button>
                                    <button
                                        className="product-btn "
                                        onClick={handleToggle}
                                    >
                                        {fav ? (
                                            <FavoriteOutlinedIcon></FavoriteOutlinedIcon>
                                        ) : (
                                            <FavoriteBorderIcon></FavoriteBorderIcon>
                                        )}
                                    </button>
                                    <button className="product-btn ">
                                        <CardGiftcardIcon></CardGiftcardIcon>
                                    </button>
                                    <button className="product-btn ">
                                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    ) : (
        // <div>
        //     <Badge
        //         badgeContent={favorites.length ? favorites.length : '0'}
        //         color="secondary"
        //     >
        //         <FavoriteBorderIcon color="white" />
        //     </Badge>
        // </div>
        <div className="singleProductGames">
            {item && (
                <div className="myCard">
                    <div
                        className="img"
                        style={{
                            background: `linear-gradient(90deg, rgba(0,0,0,0.8240546218487395) 0%, rgba(0,0,0,0) 55%),  url(/images/${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div className="container-fluid">
                            <div className="content">
                                <div className="name">{item.name}</div>
                                <div className="catg">
                                    <div>Microsoft Studios </div>
                                    <div className="rect"></div>
                                    <div>{item.category}</div>
                                    <div className="rect"></div>
                                    <div className="rating">
                                        <Rating
                                            name="half-rating"
                                            defaultValue={item.rating}
                                            precision={0.5}
                                            readOnly
                                            emptyIcon={<CustomEmptyIcon />}
                                            sx={{
                                                color: 'var(--text-color) ',
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="desc">{item.description}</div>
                                <div className="buttons">
                                    <button className="product-btn">
                                        <span>BUY</span>
                                        <span>{item.price} EGP</span>
                                    </button>
                                    <button
                                        className="product-btn "
                                        onClick={handleToggle}
                                    >
                                        {fav ? (
                                            <FavoriteOutlinedIcon></FavoriteOutlinedIcon>
                                        ) : (
                                            <FavoriteBorderIcon></FavoriteBorderIcon>
                                        )}
                                    </button>
                                    <button className="product-btn ">
                                        <CardGiftcardIcon></CardGiftcardIcon>
                                    </button>
                                    <button className="product-btn ">
                                        <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
