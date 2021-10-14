import { useState } from "react";
import Flavor from "./flavor";


const FlavorContainer =({product})=>{

    const [hover, setHover] = useState(false)

    function changeHover(){
        setHover(!hover)
    }

    return(
        <Flavor
            product={product} 
            onChangeHover={changeHover}
            open={hover}
        />
    )
}

export default FlavorContainer