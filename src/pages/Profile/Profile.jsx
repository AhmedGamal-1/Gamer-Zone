import './Profile.css';
export default function Profile() {
    return (
        <div className="profile">
            <div className="cover">
                {' '}
                <div className="profileImg">
                    <img src="/images/profile.png"></img>
                    <div className="name">Merna Desouky</div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="fav-title">Favorites</div>
                <div className="fav"></div>
            </div>
        </div>
    );
}
