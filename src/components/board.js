import { connect } from "react-redux"
import {  makeStyles } from "@material-ui/core";
import { grey } from 'material-ui-colors';
import FlavorContainer from "./flavorContainer";
import {putScoop} from "../store/actionCreators";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
    freezer: {
        backgroundColor: grey[200],
        display: 'grid',
        gridTemplateColumns:'repeat(5,1fr)',
    }
  }));

const Board=(props)=>{

    const { iceCream } = props;
    const classes = useStyles()

    useEffect(() => {
        console.log(props)
    }, [props])

    return(
        <article className={classes.freezer}>
            {
                iceCream.map(product => (
                    <FlavorContainer 
                        product={product}
                        putScoop={(id)=>props.putScoop(id)}
                    />
                ))
            }
        </article>
    )

}

const mapStateToProps=(state)=>{
    return(
        {
            iceCream: state.iceCream,
            cakeIceCream: state.cakeIceCream,
            cornet: state.cornet,
        }
    )
}

const mapDispatchToProps = {
    putScoop
}

const wrapper = connect(mapStateToProps, mapDispatchToProps)
const component = wrapper(Board)

export default component