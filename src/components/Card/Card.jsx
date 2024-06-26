import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Card.css';
import { Box } from '@mui/material';
import { useFavorites } from '../../context/FavoritesContext';
import { Link } from 'react-router-dom';



import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const { addToCart } = useCart();

    const fav = isFavorite(product.id);

    const handleToggle = () => {
        toggleFavorite(product);


    };
    const handleAddCart = (el) => {
        addToCart(el);

    };

    return (
        <Card
            className="product-card"
            sx={{
                background: '#1E2A33',
                borderRadius: '10px',
                height: '100%',
            }}
        >
            {fav ? (
                <IconButton className="fav-btn" onClick={handleToggle}>
                    <FavoriteIcon
                        sx={{
                            fontSize: '25px',
                            color: '#FF4136',
                            cursor: 'pointer',
                        }}
                    />
                </IconButton>
            ) : (
                <IconButton className="fav-btn" onClick={handleToggle}>
                    <FavoriteBorderOutlinedIcon
                        sx={{
                            fontSize: '25px',
                            color: '#FF4136',
                            cursor: 'pointer',
                        }}
                    />
                </IconButton>
            )}

            <Link
                style={{ textDecoration: 'none' }}
                to={`/products/${product.id}`}
            >
                <CardMedia
                    sx={{ borderRadius: '10px', objectFit: 'cover' }}
                    component="img"
                    alt="green iguana"
                    height="320"
                    image={`/images/${product.poster}`}


                />

            </Link>
            <Box
                className="p-2 card-content"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: 'calc(100% - 320px)',
                }}
            >
                <Link
                    style={{ textDecoration: 'none' }}
                    to={`/products/${product.id}`}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="p"
                            color="white"
                            fontSize="0.9rem"
                            textAlign="center"
                            lineHeight="1.5rem"
                            sx={{}}
                        >
                            {product.name}
                        </Typography>
                    </CardContent>
                </Link>

                <CardActions
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        gutterBottom
                        component="p"
                        color="white"
                        fontSize="14px"
                        margin="0"
                        paddingLeft="8px"
                        sx={{ color: '#FF4136' }}
                    >
                        {product.price} EGP
                    </Typography>
                    <IconButton
                        onClick={() => {
                            handleAddCart(product);
                        }}
                    >
                        <ShoppingCartOutlinedIcon
                            className="add-to-cart-btn"
                            sx={{
                                color: '#FF4136',
                                fontSize: '22px',
                            }}
                        />
                    </IconButton>
                </CardActions>
            </Box>
        </Card>
    );
}
