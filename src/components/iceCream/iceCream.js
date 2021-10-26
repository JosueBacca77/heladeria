import { makeStyles } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';
import Scoop from './scoop';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '20%',
        position: 'fixed',
        right: '2vw',
        bottom: '2vw',
        zIndex: 1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end'
    },
    cone:{
        width: 0, 
        height: 0, 
        borderLeft: '40px solid transparent',
        borderRight: '40px solid transparent',
        borderTop: '110px solid',
        borderTopColor: yellow[700],
    },
    scoops:{
        display:'flex',
        flexWrap:'wrap-reverse',
        flexDirection:'row-reverse',
        width:'80px',
        justifyContent:'center',
        alignContent:'flex-start',
    },
}));

const IceCream =({cornet})=>{

    const classes = useStyles()

    return(
        <article className={classes.root}>
            <section className={classes.scoops}>
                {
                    cornet.map(scoop=>(
                        <Scoop key={scoop.idFlavor} color={scoop.color}/>
                    ))
                }
            </section>
            <section className={classes.cone}></section>
        </article>
    )
}

export default IceCream