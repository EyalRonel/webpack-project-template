export const INCREASE = 'counter.increase';
export const DECREASE = 'counter.decrease';

export const incraseCounter = (amount = 1) => {
    return {
        type: INCREASE,
        payload: { amount }
    }
}

export const decreaseCounter = (amount = 1) => {
    return {
        type: DECREASE,
        payload: { amount }
    }
}