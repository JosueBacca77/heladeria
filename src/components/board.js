import { connect } from "react-redux"
import {  makeStyles } from "@material-ui/core";
import { grey } from 'material-ui-colors';
import FlavorContainer from "./flavorContainer";

const useStyles = makeStyles((theme) => ({
    freezer: {
        backgroundColor: grey[200],
        display: 'grid',
        gridTemplateColumns:'repeat(5,1fr)',
    }
  }));

function Board(props){
    const { iceCream } = props;
    const classes = useStyles()
    return(
        <article className={classes.freezer}>
            {
                iceCream.map(product => (
                    <FlavorContainer product={product}/>
                ))
            }
        </article>
    )
}

const mapStateToProps=(state)=>{
    return(
        {
            iceCream: state.iceCream,
            cakeIceCream: state.cakeIceCream 
        }
    )
}

const wrapper = connect(mapStateToProps)
const component = wrapper(Board)

export default component