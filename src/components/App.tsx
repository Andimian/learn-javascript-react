import { User, UserAuthContext } from '../contexts/authContext.tsx';
import { useState } from "react";
import { Provider, } from 'react-redux';
import { store } from '../redux';
import { Layout } from './layout/component.tsx';
import { RestaurantPage } from './pages/restaurant-page/component.tsx';

export const App = () => {
    const [user, setUser] = useState<User | null>(null);

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