import { connect } from "react-redux"
import {  makeStyles } from "@material-ui/core";
import { grey, brown } from 'material-ui-colors';
import FlavorContainer from "./flavorContainer";
import {putScoop, sell, cancelSelling} from "../store/actionCreators";
import { useEffect } from "react";
import sellOptions from "../data/sell/sellOptions";
import { CancelButton, SellButton } from "./Buttons";
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
        marginRight:'30%',
    }
  }));

const Board=(props)=>{

    const { iceCream, selling } = props;
    const classes = useStyles()

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
                            putScoop={(id)=>props.putScoop(id)}
                        />
                    ))
                }
            </section>
            <section className={classes.table}>
                <article className={classes.sellOptions}>
                    {
                        sellOptions.map(option => 
                            <SellButton
                                key={option.id} 
                                text={option.description}
                                onClick={()=>props.sell(option.count)}
                            />
                        )
                    }
                    {
                        selling.makingIceCream
                        ?
                            <CancelButton onClick={props.cancelSelling}/>
                        :
                        null
                    }

                </article>
            </section>
            <section>
                {
                    selling.makingIceCream
                    ?
                    <IceCream />
                    :
                    null
                }
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
    sell,
    cancelSelling,
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)
const component = wrapper(Board)

export default component