import { SELL } from "../actions";

const defaulState = 0.00

export default function cash(state = defaulState, {type, payload}){
    switch (type) {
        case SELL:
            return state + payload.count * payload.price
        default:
            return state
    }
}
