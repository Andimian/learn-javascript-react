import { useState } from "react";
import { Provider, } from 'react-redux';
import { store } from '../redux';
import { Layout } from './layout/component.tsx';
import { RestaurantPage } from './pages/restaurant-page/component.tsx';
import { TUser } from '../types.tsx';
import { UserAuthContext } from "../contexts/authContext.tsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/home-page/component.tsx';


export const App = () => {
    const [user, setUser] = useState<TUser | null>({
        name: 'Diana',
        id: '20bed9b5-9c7b-4771-8221-75b74ed1904a',
        email: 'test@bk.ru',
    });

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "restaurants",
                    element: <RestaurantPage />,
                    children: [
                        {
                            path: ":restaurantId",
                            element: <RestaurantContainer />,
                            children: [
                                {
                                    index: true,
                                    element: <Navigate to="menu" replace />,
                                },
                                {
                                    path: "menu",
                                    element: <MenuContainer />,
                                },
                                {
                                    path: "reviews",
                                    element: <ReviewsContainer />,
                                },
                            ],
                        },
                    ],
                },
                {
                    path: "dish/:dishId",
                    element: <DishPage />,
                },
            ],
        },

    ]);

    return (
        <>
        <Provider store={store}>
            <UserAuthContext.Provider value={{user, setUser}}>
                <RouterProvider router={router} />
            </UserAuthContext.Provider>
        </Provider>
        </>
    );
};

export default App;