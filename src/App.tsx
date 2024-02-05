import { RestaurantPage } from './components/psges/restaurant-page/component.tsx';
import { Layout } from './components/layout/component.tsx';
import styles from "./components/review-form/style.module.scss";
import { AuthContext } from './contexts/authContext.tsx';
import { useState } from 'react';


export const App = () => {
    const [user, setUser] = useState({name: null, email: null});

    return (
        <AuthContext.Provider value={{user: {name: null, email: null}}, setUser}>
            <Layout className={styles.root}>
                <RestaurantPage/>
            </Layout>
        </AuthContext.Provider>
    );
};

export default App;