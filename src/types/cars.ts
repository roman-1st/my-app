export interface Car {
    id: number;
    name: string;
    model: string;
    year: number;
    color: string;
    price: number;
    latitude: number;
    longitude: number;
}
export interface CarsState {
    base: Car[],
    drivers: string[],
    isLoading: false,
    filterColor: string | null,
    language: string,
}
export enum CarsActionTypes {
    FETCH_CARS = "FETCH_CARS",
    SET_CARS = "GET_CARS",
    IS_LOADING = "IS_LOADING",
    FILTER_COLOR = "FILTER_COLOR",
    SET_LANGUAGE = "SET_LANGUAGE"
}

interface fetchCarsAction {
    type: CarsActionTypes.FETCH_CARS,
}
interface setCarsBaseAction {
    type: CarsActionTypes.SET_CARS,
    payload: Car[],
}
interface isLoadingAction {
    type: CarsActionTypes.IS_LOADING,
}
interface FilterListAction {
    type: CarsActionTypes.FILTER_COLOR,
    payload: string,
}
interface setLanguageAction {
    type: CarsActionTypes.SET_LANGUAGE,
    payload: string,
}

export type CarsActions =
    fetchCarsAction |
    setCarsBaseAction |
    isLoadingAction |
    FilterListAction |
    setLanguageAction