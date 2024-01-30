export interface TRestaurantProps {
    id: string,
    name: string
    menu: MenuProps[];
    reviews: ReviewProps[],
}

export interface RestaurantsProps {
    restaurants: TRestaurantProps[],
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