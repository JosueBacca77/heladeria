import { connect } from "react-redux"
import {  makeStyles } from "@material-ui/core";
import { grey, brown } from 'material-ui-colors';
import FlavorContainer from "./flavorContainer";
import {putScoop, startSelling, cancelSelling, cleanCornet} from "../store/actionCreators";
import { useEffect } from "react";
import sellOptions from "../data/sell/sellOptions";
import { CancelButton, OptionSellButton, SellButton } from "./Buttons";
import IceCream from "./iceCream/iceCream";


const useStyles = makeStyles((theme) => ({
    freezer: {
        backgroundColor: grey[200],
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

    const cancelSell=()=>{
        return props.cancelSelling() && props.cleanCornet()

    }

    useEffect(() => {
        console.log(props)
    }, [props])

    return(
        <main>
            <section className={classes.freezer}>
                {
                    iceCream.map(product => (
                        <FlavorContainer 
                            product={product}
                            putScoop={()=>props.putScoop(product.id, product.color)}
                            ableToSell={props.selling.makingIceCream}
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
                                //onClick={()=>props.sell()}
                            />
                        </section>
                    }
                </section>
                <section style={{backgroundColor:'green'}}>
                    {
                        selling.makingIceCream
                        ?
                        <IceCream cornet={props.cornet}/>
                                
                        :
                        null
                    }
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
            selling: state.selling
        }
    )
}

const mapDispatchToProps = {
    putScoop,
    startSelling,
    cancelSelling,
    cleanCornet,
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)
const component = wrapper(Board)

export default component