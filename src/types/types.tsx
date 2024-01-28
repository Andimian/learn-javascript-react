export interface restaurantProps {
    id?: string | undefined,
    name?: string | undefined,
    menu?: MenuProps[] | undefined,
    reviews?: ReviewProps[] | undefined,
}

export interface RestaurantsProps {
    restaurants: restaurantProps[],
}

export type MenuProps = {
    id: string,
    name: string,
    price: number,
    ingredients: string[],
};

export type ReviewProps = {
    id: string,
    user: string,
    text: string,
    rating: number,
};