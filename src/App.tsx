import { Layout } from './components/layout/component.tsx';
import { Tabs } from './components/tabs/component.tsx';
import { restaurants } from './moks-data/mock.ts';

export const App = () => {
    return (
        <Layout>
            {/*<Restaurants restaurants={restaurants}/>*/}
            <Tabs restaurants={restaurants}/>
        </Layout>
    );
};

export default App;