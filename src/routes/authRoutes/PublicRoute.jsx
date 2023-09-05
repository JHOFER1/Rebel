import { Navigate, Outlet } from 'react-router-dom';
import { PRIVATE } from '../../config/router/paths';
import { useAuthContext } from '../../context/authContex';

export default function PublicRoute() {
  const { isAuthenticated, role } = useAuthContext();

  if (isAuthenticated && role === 'client') {

    return <Navigate to={PRIVATE} />;
  }

  else if (!isAuthenticated) {
    return (
      <div>
        <Outlet />
      </div>
    );
  }
}