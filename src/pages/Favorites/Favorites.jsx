import { useFavorites } from '../../context/FavoritesContext';

function Favorites() {
    const { favorites } = useFavorites();
    return <div></div>;
}

export default Favorites;
