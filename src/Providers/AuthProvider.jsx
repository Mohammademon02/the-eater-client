import React, { Children, createContext } from 'react';

export const AuthContext = createContext(null)


const AuthProvider = ({ Children }) => {
    return (
        <AuthContext.Provider>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;