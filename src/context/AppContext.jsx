import React, { useEffect, useState } from 'react';
import { roles } from '../shared/roles';

const defaultValues = {
    user: undefined,
    isLoading: true
}

export const AppContext = React.createContext(defaultValues);

export const AppProvider = ({
    children
}) => {
    const [user, setUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    const login = (username, password) => {
        // call api, save token in session storage, save user in state

        const role = roles.teacher;
        const id = 1;

        setUser({
            id,
            username,
            role
        });
    }

    const logout = (username, password) => {
        // clear sessionStorage, clear state

        setUser(undefined);
    }

    useEffect(() => {
        // check session storage for login
    }, [])

    return (
        <AppContext.Provider value={{
            user,
            isLoading,
            setIsLoading,
            login,
            logout
        }}>
            {children}
        </AppContext.Provider>
    )
}