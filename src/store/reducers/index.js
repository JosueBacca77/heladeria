import { combineReducers } from "redux"
import iceCream from "./products/iceCream"
import cakeIceCream from "./products/cakeIceCream"
import cash from "./cash"


export default combineReducers({
    iceCream,
    cakeIceCream,
    cash,
  })