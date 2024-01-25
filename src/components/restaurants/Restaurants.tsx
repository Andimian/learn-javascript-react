import { RestaurantsProps } from "../../types/types";import { Restaurant } from "./restaurant";export const Restaurants = ({restaurants}: RestaurantsProps) => {    return (        <>            {restaurants.map((rest) => (                <Restaurant key={rest.id} {...rest} />            ))}        </>    );};