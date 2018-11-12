import { INCREASE,DECREASE } from "../actions/counter-actions";

const counterReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case INCREASE:
            return state + payload.amount;
        case DECREASE:
            return state - payload.amount;
        default:
            return state;
    }
};

export default counterReducer;