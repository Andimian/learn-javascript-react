import Dishoom from "./Dishoom.tsx";
import Homeslice from "./Homeslice.tsx";
import Fabrique from "./Fabrique.tsx";
import FlatIron from "./Flat-Iron.tsx";

export interface TRestaurantProps {
    id: string,
    name: string
    menu: {
        id: string,
        name: string,
        price: number,
        ingredients: string[],
    }[];
    reviews: {
        id: string,
        user: string,
        text: string,
        rating: number,
    }[]
}

interface TRestaurantsProps {
    restaurants: TRestaurantProps[],
}

export const Restaurants = ({restaurants}: TRestaurantsProps) => {
    return (
        <>
            <Dishoom
                id={restaurants[0].id}
                name={restaurants[0].name}
                menu={restaurants[0].menu}
                reviews={restaurants[0].reviews}
            />
            <Homeslice
                id={restaurants[1].id}
                name={restaurants[1].name}
                menu={restaurants[1].menu}
                reviews={restaurants[1].reviews}
            />
            <Fabrique
                id={restaurants[2].id}
                name={restaurants[2].name}
                menu={restaurants[2].menu}
                reviews={restaurants[2].reviews}
            />
            <FlatIron
                id={restaurants[3].id}
                name={restaurants[3].name}
                menu={restaurants[3].menu}
                reviews={restaurants[3].reviews}
            />
        </>
    );
};
