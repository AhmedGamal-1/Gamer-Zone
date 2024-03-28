import { Navigate } from 'react-router-dom';

function ProtectedRoute({ childern }) {
    if (!localStorage.getItem('userToken')) {
        return <Navigate to="/login" />;
    } else {
        return childern;
    }
}

export default ProtectedRoute;
