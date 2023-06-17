import { cars } from './cars';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    cars: cars,
})

export type RootState = ReturnType<typeof rootReducer>