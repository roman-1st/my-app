import {all} from 'redux-saga/effects'
import { carsWatcher } from './cars'

export function* rootWatcher () {
    yield all([
        carsWatcher(),
    ])
}