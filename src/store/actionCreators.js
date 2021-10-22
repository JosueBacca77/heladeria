import { PUT_SCOOP, SELL_ICE_CREAM, CANCEL_SELLING } from "./actions"


const putScoop =(idFlavor)=>{
    return({
        type: PUT_SCOOP,
        payload: idFlavor
    })
}

const sell =(countScoops)=>{
    return({
        type: SELL_ICE_CREAM,
        payload: countScoops
    })
}

const cancelSelling =()=>{
    return({
        type: CANCEL_SELLING,
        payload: null
    })
}

export {putScoop, sell, cancelSelling}