import { PUT_SCOOP, SELL_ICE_CREAM, CANCEL_SELLING, CLEAN_CORNET, SELL } from "./actions"


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

const sell =(count, price)=>{
    return({
        type: SELL,
        payload: {count: count, price: price}
    })
}

export {putScoop, startSelling, cancelSelling, cleanCornet, sell}