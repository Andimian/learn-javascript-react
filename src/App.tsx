import { RestaurantPage } from './components/psges/restaurant-page/component.tsx';
import { Layout } from './components/layout/component.tsx';
import styles from "./components/review-form/style.module.scss";
import { User, UserAuthContext } from './contexts/authContext.tsx';
import { useState } from "react";


export const App = () => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserAuthContext.Provider value={{user, setUser}}>
            <Layout className={styles.root}>
                <RestaurantPage/>
            </Layout>
        </UserAuthContext.Provider>
    );
};

export default App;