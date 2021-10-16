import { useState } from "react";
import Flavor from "./flavor";


const FlavorContainer =({product, putScoop})=>{

    const [hover, setHover] = useState(false)

    function changeHover(){
        setHover(!hover)
    }

    function handlePutScoop(){
        putScoop(product.id)
    }

    return(
        <Flavor
            product={product} 
            onChangeHover={changeHover}
            open={hover}
            putScoop={handlePutScoop}
        />
    )
}

export default FlavorContainer