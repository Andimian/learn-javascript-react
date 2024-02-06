import { RestaurantPage } from './components/psges/restaurant-page/component.tsx';
import { Layout } from './components/layout/component.tsx';
import styles from "./components/review-form/style.module.scss";


export const App = () => {
    return (
        <Layout className={styles.root}>
            <RestaurantPage/>
        </Layout>

    );
};

export default App;