import { Layout } from './components/layout/component.tsx';
import { Restaurants } from "./components/restaurants/restaurants.tsx";
import { restaurants } from "./moks-data/mock.ts";

export const App = () => {
    return (
        <Layout>
            <Restaurants restaurants={restaurants}/>
        </Layout>
    );
};

export default App;