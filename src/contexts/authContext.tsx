import React from 'react';

type UserContext = {
    user: User | null;
    setUser: (user: User | null) => void;
}

export type User = {
    name: string;
    email: string;
}

// Параметром передается значение по умолчанию
// Имя контекста выбирается произвольно
export const UserAuthContext = React.createContext<UserContext>({
    user: null,
    setUser: () => {},
});

