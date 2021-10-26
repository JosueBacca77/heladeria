import { CLEAN_CORNET, PUT_SCOOP } from "../actions";

const defaulState = []

export default function cornet(state = defaulState, {type, payload}){
    switch (type) {
        case PUT_SCOOP:
            // if(state.find(flavor => flavor.idFlavor === payload.idFlavor)){
            //     state.map(flavor => {
            //         if (flavor.idFlavor === payload.idFlavor){
            //             flavor.count = flavor.count +1
            //         }
            //     })
            //     return state
            // }
            // return [...state, {idFlavor: payload.idFlavor,color:payload.color, count:1}]
            return [...state, {idFlavor: payload.idFlavor,color:payload.color}]
        case CLEAN_CORNET:
            return defaulState
        default:
            return state
    }
}
