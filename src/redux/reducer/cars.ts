import {CarsActionTypes, CarsState} from "../../types/cars";

const initialState : CarsState = {
    base: [],
    drivers: ["Виталий","Антон"],
    isLoading: false,
    filterColor: null,
    language: 'ru',
}

export const cars = ( state = initialState, action: any) : any => {
    switch(action.type) {
        case CarsActionTypes.IS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case CarsActionTypes.SET_CARS:
            return {
                ...state,
                isLoading: false,
                base: [...action.payload],
            }
        case CarsActionTypes.FILTER_COLOR:
            return {
                ...state,
                filterColor: action.payload,
            }
        case CarsActionTypes.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            }
        default:
            return {...state}
    }
}