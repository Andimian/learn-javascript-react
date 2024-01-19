import { Restaurants } from "./src/components/Restaurants";
import { restaurants } from "./src/mock.ts";

export const App = () => {
    return (
        <div>
            <Restaurants restaurants={restaurants}/>
        </div>
    );
};

export default App;