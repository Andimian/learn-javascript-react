import { useState } from "react";
import { Provider, } from 'react-redux';
import { store } from '../redux';
import { Layout } from './layout/component.tsx';
import { RestaurantPage } from './pages/restaurant-page/component.tsx';
import { TUser } from '../types.tsx';
import { UserAuthContext } from "../contexts/authContext.tsx";

export const App = () => {
    const [user, setUser] = useState<TUser | null>(null);

    return (
        <>
        <Provider store={store}>
            <UserAuthContext.Provider value={{user, setUser}}>
                <Layout>
                    <RestaurantPage/>
                </Layout>
            </UserAuthContext.Provider>
        </Provider>
        </>
    );
};

export default App;