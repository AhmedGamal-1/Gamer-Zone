import { useSelector } from 'react-redux';
import './Profile.css';
import { useFavorites } from './../../context/FavoritesContext';
import ProductCard from './../../components/Card/Card';
export default function Profile() {
    const isLogged = useSelector((state) => state.isLogged);
    const { favorites } = useFavorites();
    console.log(favorites, 'afaaaa');
    console.log(isLogged, 'ass');
    return (
        <div className="profile">
            <div className="cover">
                {' '}
                <div className="profileImg">
                    <img src="/images/profile.png"></img>
                    <div className="name">{isLogged.name}</div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="fav-title">Favorites</div>
                <div className="fav">
                    <div className="row gy-5">
                        {favorites.map((el) => (
                            <div className="col-3" key={el.id}>
                                <ProductCard product={el}></ProductCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
