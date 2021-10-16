import { PUT_SCOOP, SELL_ICE_CREAM } from "./actions"


const sellIceCream =(flavor, count)=>{
    return({
        type: SELL_ICE_CREAM,
        payload:{flavor: flavor, count: count}
    })
}

const putScoop =(idFlavor)=>{
    return({
        type: PUT_SCOOP,
        payload: idFlavor
    })
}

export {sellIceCream, putScoop}