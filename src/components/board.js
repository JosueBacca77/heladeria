import { connect } from "react-redux"
import {  makeStyles } from "@material-ui/core";
import { grey, brown } from 'material-ui-colors';
import FlavorContainer from "./flavorContainer";
import {putScoop, startSelling, cancelSelling, cleanCornet, sell} from "../store/actionCreators";
import { useEffect, useState } from "react";
import sellOptions from "../data/sell/sellOptions";
import { CancelButton, OptionSellButton, SellButton } from "./buttons";
import IceCream from "./iceCream/iceCream";
import Cash from "./cash/cash";
import { IceCreamPrice } from "../data/products/prices";


const useStyles = makeStyles((theme) => ({
    freezer: {
        backgroundColor: grey[400],
        display: 'grid',
        gridTemplateColumns:'repeat(5,1fr)',
    },
    table:{
        backgroundColor: brown[100],
        height:'80px',
        paddingTop:'20px'
    },
    sellOptions:{
        display: 'flex',
        justifyContent:'space-evenly',
        gap: '20px'
    },
  }));

const Board=(props)=>{

    const { iceCream, selling } = props;
    const classes = useStyles()

    const [ableToConfirmSell, setAbleToConfirmSell] = useState(false)

    const [ableToPutScoop, setAbleToPutScoop] = useState(false)

    const cancelSell=()=>{
        return props.cancelSelling() && props.cleanCornet()

    }

    const handleSell=()=>{
        if (ableToConfirmSell){
            return props.sell(props.cornet.length, IceCreamPrice) && props.cancelSelling() && props.cleanCornet()
        }
    }

    const handlePutScoop=(id, color)=>{
        if (ableToPutScoop){
            return props.putScoop(id, color)
        }
    }

    useEffect(() => {
        console.log(props)
        setAbleToConfirmSell(props.cornet.length === props.selling.countScoops && props.selling.makingIceCream)
        setAbleToPutScoop(props.cornet.length<props.selling.countScoops)
    }, [props])

    return(
        <main>
            <section className={classes.freezer}>
                {
                    iceCream.map(product => (
                        <FlavorContainer 
                            product={product}
                            putScoop={()=>handlePutScoop(product.id, product.color)}
                            ableToSell={ableToPutScoop}
                        />
                    ))
                }
            </section>
            <section className={classes.table}>
                <section className={classes.sellOptions}>
                    {
                        !selling.makingIceCream
                        ?
                        sellOptions.map(option => 
                            <OptionSellButton
                                key={option.id} 
                                text={option.description}
                                onClick={()=>props.startSelling(option.count)}
                            />
                        )
                        :
                        <section className={classes.sellOptions}>
                            <CancelButton onClick={cancelSell}/>
                            <SellButton
                                enabled={ableToConfirmSell}
                                onClick={handleSell}
                            />
                        </section>
                    }
                </section>
                <section >
                    {
                        selling.makingIceCream
                        ?
                        <IceCream cornet={props.cornet}/>     
                        :
                        null
                    }
                </section>
                <section>
                    <Cash cash={props.cash}/>     
                </section>
                
            </section>
            
        </main>
    )
}

const mapStateToProps=(state)=>{
    return(
        {
            iceCream: state.iceCream,
            cakeIceCream: state.cakeIceCream,
            cornet: state.cornet,
            selling: state.selling,
            cash: state.cash,
        }
    )
}

const mapDispatchToProps = {
    putScoop,
    startSelling,
    cancelSelling,
    cleanCornet,
    sell,
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)
const component = wrapper(Board)

export default component