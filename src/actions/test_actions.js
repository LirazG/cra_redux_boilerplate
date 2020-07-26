
import {
    SET_COUNTER,
} from './types';

export function setCounter(value) {
    return { type: SET_COUNTER, payload: value };
}