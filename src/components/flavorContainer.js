import { useState } from "react";
import Flavor from "./flavor";


const FlavorContainer =({product, putScoop})=>{

    const [hover, setHover] = useState(false)

    function changeHover(value){
        setHover(value)
    }

    function handlePutScoop(){
        putScoop(product.id)
    }

    return(
        <Flavor
            product={product} 
            onChangeHover={(value)=>changeHover(value)}
            open={hover}
            putScoop={handlePutScoop}
        />
    )
}

export default FlavorContainer