import { User, UserAuthContext } from '../contexts/authContext.tsx';
import { useState } from "react";
import { Provider, } from 'react-redux';
import { store } from '../redux';

export const App = () => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <Provider store={store}>
            <UserAuthContext.Provider value={{user, setUser}}>
                {/*<Layout>*/}
                {/*    <RestaurantPage/>*/}
                {/*</Layout>*/}
                sdf
            </UserAuthContext.Provider>
        </Provider>
    );
};

export default App;