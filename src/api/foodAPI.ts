import {axiosClassic, instance} from "./interceptors";
import {CreateFoodType, FoodResponseType, SearchFoodParamsType, UpdateFoodType} from "./types";

export const foodAPI = {
  fetchFoods : (params: SearchFoodParamsType) => {
    return axiosClassic
      .get<{foods: FoodResponseType[]}>(`foods/search?${params.title}&kind=${params.kind}&${params.category}&${params.sortBy}=${params.order}&limit=${params.limit}&take=${params.take}`)
  },
  fetchOneFood: (id: string) => {
    return axiosClassic.get<FoodResponseType>(`foods/${id}`)
  },
  createFood: (data: CreateFoodType) => {
    return instance.post<FoodResponseType>(`foods`, data)
  },
  updateFood: (id: string, data: UpdateFoodType) => {
    return instance.put<FoodResponseType>(`foods/${id}`, data)
  },
  removeFood: (id: string) => {
    return instance.delete<FoodResponseType>(`foods/${id}`)
  },
  addToFavorites: (id: string) => {
    return instance.post(`foods/${id}/favorites`)
  },
  removeFromFavorites: (id: string) => {
    return instance.delete(`foods/${id}/favorites`)
  }
}