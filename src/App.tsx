import { Layout } from './components/layout/component.tsx';
import { Restaurants } from './components/restaurants/Restaurants.tsx';
import { restaurants } from './moks-data/mock.ts';

export const App = () => {
    return (
        <Layout>
            <Restaurants restaurants={restaurants}></Restaurants>
        </Layout>
    );
};

export default App;