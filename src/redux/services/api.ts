import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TReview } from '../entities/review/thunks/get-reviews.ts';
import { IRestaurant, TUser } from '../../types.tsx';

type TagType = "Review" | "Restaurant";

export const api = createApi(
	{
		reducerPath: 'api',
		/* Теги позволяют пометить какие-то данные как невалидные, ниже определяем типы тегов, назвать
		* можно в принципе хоть как, но вот как пример можно называть по типу сущности и ниже где запрос
		* нужно пометить тегами с помощью providesTags */
		tagTypes: ['Review', 'Restaurant'],

		// корневой endpoint
		baseQuery: fetchBaseQuery({
			baseUrl: "http://localhost:3001/api/"
		}),
		endpoints: (builder) => ({
			getRestaurants: builder.query<IRestaurant[], unknown>({
				query: () => ({ url: 'restaurants' }),
			}),
			getUsers: builder.query<TUser[], unknown>({
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
				/* Должна вернуть определенное количество тегов. Короче когда с какой-то кверИ получаем
				результат, к этому результату могут быть добавлены теги и когда мы скажем, что какой-то из этих тегов
				не валидный, то эти данные (этой кверИ с этими параметрами) будут перезапрошены */
				providesTags: (result, _, restaurantId) =>
					result
						?.map(({ id }) => ({ type: "Review" as TagType, id }))
						.concat(
							{ type: "Review", id: "ALL" },
							{ type: "Restaurant", id: restaurantId }
						) ?? [],
			}),
			createReview: builder.mutation({
				query: ({ restaurantId, newReview }) => ({
					url: `review/${restaurantId}`,
					method: 'POST',
					body: newReview,
				}),
				// массив невалидных тегов
				invalidatesTags: (result, _, { restaurantId }) => {
					console.log(result);
					return [
						{ type: 'Restaurant', id: restaurantId },
					]
				},
			}),
			updateReview: builder.mutation({
				query: ({ reviewId, review }) => ({
					url: `review/${reviewId}`,
					method: 'PATCH',
					body: review,
				}),
				invalidatesTags: (result, _, { reviewId }) => {
					console.log(result);
					return [
						{ type: 'Review', id: reviewId },
					];
				}

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
