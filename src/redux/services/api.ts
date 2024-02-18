// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { DishType } from '../../components/dish/container.tsx';
import { TReview } from '../../components/reviews/reviews.tsx';


export const api = createApi(
	{
		reducerPath: 'api',
		// todo это что
		tagTypes: ['Review', 'Restaurant'],

		// корневой endpoint
		baseQuery: fetchBaseQuery({
			baseUrl: "http://localhost:3001/api/"
		}),
		endpoints: (builder) => ({
			getRestaurants: builder.query({
				query: () => ({ url: 'restaurants' }),
			}),
			getUsers: builder.query({
				query: () => ({ url: 'users' }),
			}),
			getDishesByRestaurantId: builder.query({
				query: (restaurantId) => ({
					url: 'dishes',
					params: { restaurantId },
				}),
			}),
			getReviewsByRestaurantId: builder.query<TReview[], string>({
				query: (restaurantId) => ({
					url: 'reviews',
					params: { restaurantId },
				}),
				providesTags: (result, _, restaurantId) =>
					result
						.map(({ id }) => ({ type: 'Review', id }))
						.concat(
							{ type: 'Review', id: 'All' },
							{ type: 'Restaurant', id: restaurantId }
						),
			}),
			createReview: builder.mutation({
				query: ({ restaurantId, newReview }) => ({
					url: `review/${restaurantId}`,
					method: 'POST',
					body: newReview,
				}),
				invalidatesTags: (result, _, { restaurantId }) => [
					{ type: 'Restaurant', id: restaurantId },
				],
			}),
			updateReview: builder.mutation({
				query: ({ review }) => ({
					url: `review/${review.id}`,
					method: 'PATCH',
					body: review,
				}),
				invalidatesTags: (result, _, { review }) => [
					{ type: 'Review', id: review.id },
				],
			}),
		}),
	}
)

export const {
	useGetUsersQuery,
	useGetRestaurantsQuery,
	useGetDishesByRestaurantIdQuery,
	useGetReviewsByRestaurantIdQuery,
	useCreateReviewMutation,
	useUpdateReviewMutation,
} = api;
