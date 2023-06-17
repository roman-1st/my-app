import {CarsActionTypes} from "../../types/cars";

export const setCars = (payload: any) => {
    return ({ type: CarsActionTypes.SET_CARS, payload})
}

export const isLoading = () => {
    return ({ type: CarsActionTypes.IS_LOADING})
}

export const setFilterColor = (payload: string) => {
    return ({ type: CarsActionTypes.FILTER_COLOR, payload})
}

export const setLanguage = (payload: string) => {
    return ({ type: CarsActionTypes.SET_LANGUAGE, payload})
}