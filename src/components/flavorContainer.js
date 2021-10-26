import { useState } from "react";
import Flavor from "./flavor";


const FlavorContainer =({product, putScoop, ableToSell})=>{

    const [hover, setHover] = useState(false)

    function changeHover(value){
        setHover(value)
    }

    return(
        <Flavor
            product={product} 
            onChangeHover={(value)=>changeHover(value)}
            open={hover}
            putScoop={putScoop}
            ableToSell={ableToSell}
        />
    )
}

export default FlavorContainer