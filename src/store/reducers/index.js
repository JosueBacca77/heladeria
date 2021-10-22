import { combineReducers } from "redux"
import iceCream from "./../../data/products/iceCream"
import cakeIceCream from "./../../data/products/cakeIceCream"
import cash from "./cash"
import cornet from "./cornet"
import selling from "./selling"


export default combineReducers({
    iceCream,
    cakeIceCream,
    cash,
    cornet,
    selling,
  })