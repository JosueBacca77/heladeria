import { PUT_SCOOP } from "../actions";

const defaulState = []

export default function cornet(state = defaulState, {type, payload}){
    switch (type) {
        case PUT_SCOOP:
            if(state.find(flavor => flavor.idFlavor === payload)){
                state.map(flavor => {
                    if (flavor.idFlavor === payload){
                        flavor.count = flavor.count +1
                    }
                })
                return state
            }
            return [...state, {idFlavor: payload, count:1}]
        default:
            return state
    }
}
