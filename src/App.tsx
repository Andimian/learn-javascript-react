import { Restaurants } from "./components/Restaurants.tsx";
import { restaurants } from "./mock.ts";

export const App = () => {
    return (
        <div>
            <Restaurants restaurants={restaurants}/>
        </div>
    );
};

export default App;