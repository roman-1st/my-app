import axios, { AxiosResponse } from 'axios';
import { call, put, takeEvery } from "redux-saga/effects"
import {isLoading, setCars} from "../actions/cars";
import {CarsActionTypes} from "../../types/cars";

const fetchCars = () => axios.get(`https://test.tspb.su/test-task/vehicles`)
const loading = (ms: number) => new Promise(res => setTimeout(res, ms)) // имитация загрузки в 2 сек

function* carsWorker(action: any) {
    try {
        yield put(isLoading())
        yield loading(1500)
        const response: AxiosResponse = yield call(fetchCars);
        yield put(setCars(response.data));
    } catch (error: any) {
        console.log(error.message)
    }
}

export function* carsWatcher() {
    yield takeEvery(CarsActionTypes.FETCH_CARS, carsWorker)
}