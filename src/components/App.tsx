import { RestaurantPage } from './pages/restaurant-page/component.tsx';
import { Layout } from './layout/component.tsx';
import { User, UserAuthContext } from '../contexts/authContext.tsx';
import { useState } from "react";

export const App = () => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserAuthContext.Provider value={{user, setUser}}>
            <Layout>
                <RestaurantPage/>
            </Layout>
        </UserAuthContext.Provider>
    );
};

export default App;