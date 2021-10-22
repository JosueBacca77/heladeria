import { CANCEL_SELLING, SELL_ICE_CREAM } from "../actions";

const defaulState = {
    makingIceCream: false,
    countScoops: 0
}

export default function selling(state = defaulState, {type, payload}){
    switch (type) {
        case SELL_ICE_CREAM:
            return {
                makingIceCream: true,
                countScoops: payload
            }
        case CANCEL_SELLING:
            return defaulState
        default:
            return state
    }
}
