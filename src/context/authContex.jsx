import { createContext, useCallback, useContext, useMemo, useState } from "react";
import PropTypes from 'prop-types';

const MY_AUTH_APP = 'MY_AUTH_APP';
const ROLES_STORAGE_KEY = 'ROLES';
const KEY_JWT = 'KEY_JWT';
const USER_ID = 'USER_ID';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(() =>
        window.localStorage.getItem(MY_AUTH_APP)
    );

    const [role, setRole] = useState(() =>
        window.localStorage.getItem(ROLES_STORAGE_KEY)
    );

    const [jwt, setJwt] = useState(() =>
        window.localStorage.getItem(KEY_JWT)
    );

    const [id, setId] = useState(() =>
        window.localStorage.getItem(USER_ID)
    );

    const login = useCallback((userRole) => {
        window.localStorage.setItem(MY_AUTH_APP, true);
        window.localStorage.setItem(ROLES_STORAGE_KEY, userRole);
        setIsAuthenticated(true);
        setRole(userRole);
    }, []);

    const logout = useCallback(() => {
        window.localStorage.removeItem(MY_AUTH_APP);
        window.localStorage.removeItem(ROLES_STORAGE_KEY);
        window.localStorage.removeItem(KEY_JWT);
        window.localStorage.removeItem(USER_ID);
        setIsAuthenticated(false);
        setRole('');
        setJwt('');
    }, []);
    const setAuthToken = useCallback((token) => {
        window.localStorage.setItem(KEY_JWT, token);
        setJwt(token)
    }, []);

    const setUserId = useCallback((id) => {
        window.localStorage.setItem(USER_ID, id);
        setId(id)
    }, []);

    const value = useMemo(
        () => ({
            login,
            logout,
            isAuthenticated,
            role,
            jwt,
            setAuthToken,
            setUserId,
            id,
        }),
        [isAuthenticated, login, logout, role, jwt, setAuthToken, id, setUserId]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
    children: PropTypes.object
  };

  export function useAuthContext() {
    return useContext(AuthContext);
  }