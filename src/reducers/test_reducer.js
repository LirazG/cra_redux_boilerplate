import {
    SET_COUNTER
} from '../actions/types';

const initialState = {
    counter: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_COUNTER:
            return { ...state, counter: action.payload }
        default:
            return state;
    }
}