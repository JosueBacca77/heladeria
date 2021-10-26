import { PUT_SCOOP, SELL_ICE_CREAM, CANCEL_SELLING, CLEAN_CORNET } from "./actions"


const putScoop =(idFlavor, color)=>{
    return({
        type: PUT_SCOOP,
        payload: {idFlavor: idFlavor, color: color}
    })
}

const startSelling =(countScoops)=>{
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

const cleanCornet =()=>{
    return({
        type: CLEAN_CORNET,
        payload: null
    })
}

export {putScoop, startSelling, cancelSelling, cleanCornet}