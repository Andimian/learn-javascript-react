import React from 'react';

export const initialState = {
    user : {
        name: null,
        email: null,
    },
    setUser: ({name: string, email}),
};

// Параметром передается значение по умолчанию
// Имя контекста выбирается произвольно
export const UserAuthContext = React.createContext(initialState);

