export type restaurantProps  = {
    id: string,
    name: string,
    menu: MenuProps[],
    reviews: ReviewProps[],
};

// export  type RestaurantsProps = {
//     restaurants: restaurantProps[],
// }
export  type RestaurantsProps = restaurantProps[];

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