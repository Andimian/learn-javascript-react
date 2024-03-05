import React from 'react';
import { TUser } from '../types.tsx';

type UserContext = {
    user: TUser | null;
    setUser: (user: TUser | null) => void;
}

// Параметром передается значение по умолчанию
// Имя контекста выбирается произвольно
export const UserAuthContext = React.createContext<UserContext>({
    user: null,
    setUser: () => {},
});

