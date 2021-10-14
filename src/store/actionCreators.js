import { SELL_ICE_CREAM } from "./actions"


const sellIceCream =(flavor, count)=>{
    return({
        type: SELL_ICE_CREAM,
        payload:{flavor: flavor, count: count}
    })
}