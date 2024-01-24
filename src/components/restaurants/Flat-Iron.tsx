import * as React from "react";
import { TRestaurantProps } from "./Restaurants.tsx";


export const FlatIron: React.FC<TRestaurantProps> = ({name, menu, reviews}) => {
    return (
        <div>
            <h2>Ресторан {name}</h2>
            <h3>Меню</h3>
            <ul>
                <li>{menu[0].name}</li>
                <li>{menu[1].name}</li>
            </ul>
            <h3>Отзывы</h3>
            <ul>
                <li>{reviews[0].text}</li>
                <li>{reviews[1].text}</li>
            </ul>
        </div>
    );
};

export default FlatIron;